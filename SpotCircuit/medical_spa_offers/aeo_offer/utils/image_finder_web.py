from flask import Flask, render_template, request, jsonify, send_file
import json
import os
import requests
from PIL import Image
from io import BytesIO
import tempfile
import shutil
import logging
from datetime import datetime

# Set up logging
log_file = os.path.join(os.path.dirname(__file__), 'image_finder.log')
logging.basicConfig(
    filename=log_file,
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

app = Flask(__name__)

# Load config
config_path = os.path.join(os.path.dirname(__file__), 'image_config.json')
with open(config_path) as f:
    config = json.load(f)

# API Keys
PEXELS_API_KEY = "RCoXOGDmjtszWCUwiM7a0s6gesH12E6Gugb6WdYdykYKsjNVK564JiKI"  # Direct API key
PIXABAY_API_KEY = config['pixabay_api_key']
DOWNLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'assets', 'images')
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

def log_to_file(message):
    logging.info(message)
    print(message)  # Also print to console

def search_pexels(query, page=1, per_page=15):
    log_to_file(f"\nTrying Pexels search with query: {query} (page {page})")
    log_to_file(f"Using Pexels API key: {PEXELS_API_KEY}")
    
    headers = {"Authorization": PEXELS_API_KEY}
    params = {
        "query": query,
        "per_page": per_page,
        "page": page,
        "orientation": "landscape"
    }
    
    try:
        log_to_file("Making request to Pexels API...")
        response = requests.get("https://api.pexels.com/v1/search", headers=headers, params=params)
        log_to_file(f"Pexels response status: {response.status_code}")
        log_to_file(f"Pexels response headers: {dict(response.headers)}")
        
        response.raise_for_status()
        data = response.json()
        log_to_file(f"Pexels response data: {str(data)[:500]}...")
        
        if 'photos' not in data:
            log_to_file(f"No photos in Pexels response: {data}")
            return []
            
        results = []
        for photo in data['photos']:
            results.append({
                'id': f"pexels_{photo['id']}",  # Add prefix to avoid ID conflicts
                'preview_url': photo['src']['medium'],
                'url': photo['src']['original'],
                'width': photo['width'],
                'height': photo['height'],
                'description': photo.get('alt', ''),
                'author': photo['photographer'],
                'source': 'Pexels'
            })
        log_to_file(f"Successfully processed {len(results)} Pexels images")
        return results
    except requests.exceptions.RequestException as e:
        log_to_file(f"Pexels API error: {str(e)}")
        return []
    except Exception as e:
        log_to_file(f"Unexpected error in Pexels search: {str(e)}")
        log_to_file(f"Full error: {repr(e)}")
        return []

def search_pixabay(query, page=1, per_page=15):
    log_to_file(f"\nSearching Pixabay for: {query} (page {page})")
    params = {
        "key": PIXABAY_API_KEY,
        "q": query,
        "per_page": per_page,
        "page": page,
        "image_type": "photo",
        "orientation": "horizontal",
        "safesearch": True
    }
    try:
        response = requests.get("https://pixabay.com/api", params=params)
        response.raise_for_status()
        data = response.json()
        
        if 'hits' not in data:
            log_to_file(f"No hits in Pixabay response: {data}")
            return []
            
        results = []
        for img in data['hits']:
            results.append({
                'id': f"pixabay_{img['id']}",  # Add prefix to avoid ID conflicts
                'preview_url': img['webformatURL'],
                'url': img['largeImageURL'],
                'width': img['imageWidth'],
                'height': img['imageHeight'],
                'description': img.get('tags', ''),
                'author': img['user'],
                'source': 'Pixabay'
            })
        return results
    except requests.exceptions.RequestException as e:
        log_to_file(f"Pixabay API error: {str(e)}")
        return []
    except Exception as e:
        log_to_file(f"Unexpected error: {str(e)}")
        return []

@app.route('/')
def index():
    # Get categories from config
    categories = list(config['categories'].keys())
    return render_template('image_finder.html', categories=categories)

@app.route('/search')
def search():
    query = request.args.get('query', 'medical spa')
    pixabay_page = int(request.args.get('pixabay_page', '1'))
    pexels_page = int(request.args.get('pexels_page', '1'))
    
    try:
        results = {
            'pixabay': {
                'images': [],
                'hasMore': False
            },
            'pexels': {
                'images': [],
                'hasMore': False
            }
        }
        
        if config['image_sources']['pixabay']['enabled']:
            pixabay_results = search_pixabay(query, page=pixabay_page)
            results['pixabay'] = {
                'images': pixabay_results,
                'hasMore': len(pixabay_results) > 0
            }
            log_to_file(f"Pixabay results page {pixabay_page}: {len(pixabay_results)}")
            
        if config['image_sources']['pexels']['enabled']:
            pexels_results = search_pexels(query, page=pexels_page)
            results['pexels'] = {
                'images': pexels_results,
                'hasMore': len(pexels_results) > 0
            }
            log_to_file(f"Pexels results page {pexels_page}: {len(pexels_results)}")
        
        return jsonify({
            "success": True,
            "results": results
        })
    except Exception as e:
        log_to_file(f"Search error: {str(e)}")
        return jsonify({
            "success": False,
            "error": str(e)
        })

@app.route('/download', methods=['POST'])
def download():
    try:
        data = request.get_json()
        if not data or 'images' not in data:
            return jsonify({"success": False, "error": "No images provided"})
            
        images = data['images']
        log_to_file(f"Downloading {len(images)} images to {DOWNLOAD_DIR}")
        
        successful_downloads = []
        for img in images:
            category = img.get('category', '')
            if not category:
                log_to_file(f"Warning: Image {img['id']} has no category")
                continue
                
            dimensions = config['categories'][category]['required_dimensions']
            if not dimensions:
                log_to_file(f"Warning: No dimensions found for category {category}")
                continue
                
            # Generate timestamp-based filename
            timestamp = datetime.now().strftime("%m%d%y_%H_%M")
            output_path = os.path.join(DOWNLOAD_DIR, f"{category}_{timestamp}_{len(successful_downloads) + 1}.webp")
            
            log_to_file(f"Downloading image ({category}) to: {output_path}")
            
            # Use 'url' instead of 'download_url'
            if download_and_convert(img['url'], output_path, dimensions['width'], dimensions['height']):
                successful_downloads.append(output_path)
            
        return jsonify({
            "success": True,
            "downloaded": successful_downloads
        })
        
    except Exception as e:
        log_to_file(f"Download error: {str(e)}")
        return jsonify({
            "success": False,
            "error": str(e)
        })

def download_and_convert(image_url, output_path, width, height):
    try:
        response = requests.get(image_url)
        response.raise_for_status()
        img = Image.open(BytesIO(response.content))
        img = img.resize((width, height), Image.Resampling.LANCZOS)
        img.save(output_path, 'WEBP', quality=90, optimize=True)
        return True
    except Exception as e:
        log_to_file(f"Error processing image: {e}")
        return False

if __name__ == '__main__':
    log_to_file("\n=== Starting Pexels Image Finder ===")
    log_to_file("Server running on http://localhost:3800")
    app.run(debug=True, port=3800)
