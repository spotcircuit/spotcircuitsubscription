import os
import json
import requests
from PIL import Image
from io import BytesIO
import tempfile
import shutil
from concurrent.futures import ThreadPoolExecutor, as_completed

class ImageSource:
    def __init__(self, name, api_url, api_key):
        self.name = name
        self.api_url = api_url
        self.api_key = api_key

    def search(self, query, per_page=10):
        raise NotImplementedError

class UnsplashSource(ImageSource):
    def search(self, query, per_page=10):
        headers = {"Authorization": f"Client-ID {self.api_key}"}
        params = {
            "query": query,
            "per_page": per_page,
            "orientation": "landscape"
        }
        try:
            response = requests.get(f"{self.api_url}/search/photos", headers=headers, params=params)
            response.raise_for_status()
            results = response.json()["results"]
            return [{
                "id": img["id"],
                "description": img["description"] or "No description",
                "author": img["user"]["name"],
                "width": img["width"],
                "height": img["height"],
                "preview_url": img["urls"]["small"],
                "download_url": img["urls"]["full"],
                "source": "Unsplash",
                "tags": [tag["title"] for tag in img.get("tags", [])]
            } for img in results]
        except Exception as e:
            print(f"Error searching Unsplash: {e}")
            return []

class PexelsSource(ImageSource):
    def search(self, query, per_page=10):
        headers = {"Authorization": self.api_key}
        params = {
            "query": query,
            "per_page": per_page,
            "orientation": "landscape"
        }
        try:
            response = requests.get(f"{self.api_url}/search", headers=headers, params=params)
            response.raise_for_status()
            results = response.json()["photos"]
            return [{
                "id": img["id"],
                "description": img["alt"] or "No description",
                "author": img["photographer"],
                "width": img["width"],
                "height": img["height"],
                "preview_url": img["src"]["medium"],
                "download_url": img["src"]["original"],
                "source": "Pexels",
                "tags": []
            } for img in results]
        except Exception as e:
            print(f"Error searching Pexels: {e}")
            return []

class PixabaySource(ImageSource):
    def search(self, query, per_page=10):
        params = {
            "key": self.api_key,
            "q": query,
            "per_page": per_page,
            "image_type": "photo",
            "orientation": "horizontal"
        }
        try:
            response = requests.get(f"{self.api_url}", params=params)
            response.raise_for_status()
            results = response.json()["hits"]
            return [{
                "id": img["id"],
                "description": img.get("tags", "No description"),
                "author": img["user"],
                "width": img["imageWidth"],
                "height": img["imageHeight"],
                "preview_url": img["webformatURL"],
                "download_url": img["largeImageURL"],
                "source": "Pixabay",
                "tags": img.get("tags", "").split(", ")
            } for img in results]
        except Exception as e:
            print(f"Error searching Pixabay: {e}")
            return []

class ImageFinder:
    def __init__(self):
        self.config_path = os.path.join(os.path.dirname(__file__), 'image_config.json')
        with open(self.config_path) as f:
            self.config = json.load(f)
        
        self.sources = []
        if self.config["image_sources"]["unsplash"]["enabled"]:
            api_key = self.config.get("unsplash_api_key")
            if api_key != "YOUR_UNSPLASH_ACCESS_KEY":
                self.sources.append(UnsplashSource(
                    "unsplash",
                    self.config["image_sources"]["unsplash"]["api_url"],
                    api_key
                ))
        
        if self.config["image_sources"]["pexels"]["enabled"]:
            api_key = self.config.get("pexels_api_key")
            if api_key != "YOUR_PEXELS_API_KEY":
                self.sources.append(PexelsSource(
                    "pexels",
                    self.config["image_sources"]["pexels"]["api_url"],
                    api_key
                ))
        
        if self.config["image_sources"]["pixabay"]["enabled"]:
            api_key = self.config.get("pixabay_api_key")
            if api_key != "YOUR_PIXABAY_API_KEY":
                self.sources.append(PixabaySource(
                    "pixabay",
                    self.config["image_sources"]["pixabay"]["api_url"],
                    api_key
                ))
        
        if not self.sources:
            print("Please set at least one API key in image_config.json")
            exit(1)
            
        self.categories = self.config['categories']
        self.temp_dir = tempfile.mkdtemp()
        self.download_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'assets', 'images')
        os.makedirs(self.download_dir, exist_ok=True)

    def clear_screen(self):
        os.system('cls' if os.name == 'nt' else 'clear')

    def search_all_sources(self, category, per_page=5):
        tags = self.categories[category]['required_tags']
        query = ' '.join(tags)
        
        print(f"\nSearching with query: {query}")
        
        all_results = []
        with ThreadPoolExecutor(max_workers=len(self.sources)) as executor:
            future_to_source = {
                executor.submit(source.search, query, per_page): source.name
                for source in self.sources
            }
            
            for future in as_completed(future_to_source):
                source_name = future_to_source[future]
                try:
                    results = future.result()
                    print(f"\nFound {len(results)} results from {source_name}")
                    all_results.extend(results)
                except Exception as e:
                    print(f"Error from {source_name}: {e}")
        
        print(f"\nTotal results found: {len(all_results)}")
        return all_results

    def download_and_preview(self, image_url):
        try:
            response = requests.get(image_url)
            response.raise_for_status()
            img = Image.open(BytesIO(response.content))
            preview_path = os.path.join(self.temp_dir, "preview.jpg")
            img.save(preview_path)
            os.startfile(preview_path)
            return True
        except Exception as e:
            print(f"Error downloading/previewing image: {e}")
            return False

    def save_image(self, image_url, category, index):
        try:
            response = requests.get(image_url)
            response.raise_for_status()
            
            dims = self.categories[category]['required_dimensions']
            img = Image.open(BytesIO(response.content))
            img = img.resize((dims['width'], dims['height']), Image.Resampling.LANCZOS)
            
            filename = f"{category}_{dims['width']}x{dims['height']}_{index}.jpg"
            save_path = os.path.join(self.download_dir, filename)
            img.save(save_path, quality=95, optimize=True)
            return save_path
        except Exception as e:
            print(f"Error saving image: {e}")
            return None

    def find_images(self, category):
        if category not in self.categories:
            print(f"Invalid category: {category}")
            return

        print(f"\nSearching for {category} images...")
        print(f"Tags: {', '.join(self.categories[category]['required_tags'])}")
        
        results = self.search_all_sources(category)

        if not results:
            print("\nNo images found. Try different tags in image_config.json")
            input("\nPress Enter to continue...")
            return

        while True:
            self.clear_screen()
            print(f"\nFound {len(results)} free images for {category}:")
            print(f"Required dimensions: {self.categories[category]['required_dimensions']['width']}x{self.categories[category]['required_dimensions']['height']}")
            
            for i, img in enumerate(results, 1):
                print(f"\n{i}. [{img['source']}] {img['description']}")
                print(f"   By: {img['author']}")
                print(f"   Original size: {img['width']}x{img['height']}")
                if img['tags']:
                    print(f"   Tags: {', '.join(img['tags'][:3])}")

            choice = input("\nEnter number to preview (or 'q' to quit): ")
            if choice.lower() == 'q':
                break

            try:
                idx = int(choice) - 1
                if 0 <= idx < len(results):
                    img = results[idx]
                    print(f"\nDownloading preview from {img['source']}...")
                    if self.download_and_preview(img['preview_url']):
                        save = input("\nSave this image? (y/n): ")
                        if save.lower() == 'y':
                            saved_path = self.save_image(img['download_url'], category, idx + 1)
                            if saved_path:
                                print(f"\nImage saved and resized to: {saved_path}")
                                return saved_path
                    else:
                        print("Failed to download preview.")
            except ValueError:
                print("Invalid choice. Please enter a number.")
            except Exception as e:
                print(f"Error: {e}")

    def cleanup(self):
        shutil.rmtree(self.temp_dir, ignore_errors=True)

def main():
    finder = ImageFinder()
    try:
        while True:
            finder.clear_screen()
            print("\n=== SpotCircuit Landing Page Image Finder ===")
            print("Select a category to find images for:\n")
            
            for i, category in enumerate(finder.categories.keys(), 1):
                desc = finder.categories[category].get('description', '')
                dims = finder.categories[category]['required_dimensions']
                print(f"{i}. {category.title()}: {desc}")
                print(f"   Size: {dims['width']}x{dims['height']}")
            
            choice = input("\nEnter category name or 'q' to quit: ")
            if choice.lower() == 'q':
                break
                
            if choice in finder.categories:
                finder.find_images(choice)
                input("\nPress Enter to continue...")
    finally:
        finder.cleanup()

if __name__ == "__main__":
    main()
