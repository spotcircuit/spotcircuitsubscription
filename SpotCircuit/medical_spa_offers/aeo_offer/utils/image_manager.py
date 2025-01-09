import os
import json
import shutil
import hashlib
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional
import requests
from PIL import Image
from rich.console import Console
from rich.table import Table
from rich.progress import Progress
import pandas as pd
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

console = Console()

class ImageManager:
    def __init__(self, base_path: str):
        self.base_path = Path(base_path)
        self.raw_path = self.base_path / 'assets' / 'raw'
        self.optimized_path = self.base_path / 'assets' / 'optimized'
        self.metadata_path = self.base_path / 'utils' / 'image_metadata.json'
        self.raw_path.mkdir(parents=True, exist_ok=True)
        self.optimized_path.mkdir(parents=True, exist_ok=True)
        self.metadata = self._load_metadata()

    def _load_metadata(self) -> Dict:
        """Load image metadata from JSON file"""
        if self.metadata_path.exists():
            with open(self.metadata_path, 'r') as f:
                return json.load(f)
        return {
            'images': {},
            'categories': {},
            'tags': {},
            'last_updated': datetime.now().isoformat()
        }

    def _save_metadata(self):
        """Save metadata to JSON file"""
        self.metadata['last_updated'] = datetime.now().isoformat()
        with open(self.metadata_path, 'w') as f:
            json.dump(self.metadata, f, indent=2)

    def add_image(self, 
                 source_path: str, 
                 category: str, 
                 tags: List[str], 
                 description: str,
                 source: str = 'local',
                 source_url: Optional[str] = None):
        """Add a new image to the raw directory and track its metadata"""
        # Generate unique filename
        file_hash = hashlib.md5(open(source_path, 'rb').read()).hexdigest()[:8]
        original_name = Path(source_path).name
        new_filename = f"{category}-{file_hash}-{original_name}"
        
        # Copy file to raw directory
        destination = self.raw_path / new_filename
        shutil.copy2(source_path, destination)

        # Get image info
        with Image.open(destination) as img:
            width, height = img.size
            format = img.format

        # Update metadata
        image_data = {
            'filename': new_filename,
            'original_name': original_name,
            'category': category,
            'tags': tags,
            'description': description,
            'source': source,
            'source_url': source_url,
            'width': width,
            'height': height,
            'format': format,
            'date_added': datetime.now().isoformat(),
            'optimized_versions': []
        }

        self.metadata['images'][new_filename] = image_data
        
        # Update categories
        if category not in self.metadata['categories']:
            self.metadata['categories'][category] = []
        self.metadata['categories'][category].append(new_filename)

        # Update tags
        for tag in tags:
            if tag not in self.metadata['tags']:
                self.metadata['tags'][tag] = []
            self.metadata['tags'][tag].append(new_filename)

        self._save_metadata()
        return new_filename

    def download_image(self, url: str, category: str, tags: List[str], description: str):
        """Download an image from a URL and add it to the collection"""
        temp_path = self.raw_path / 'temp_download'
        
        # Download image
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        with open(temp_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)

        # Add image to collection
        try:
            filename = self.add_image(
                temp_path,
                category,
                tags,
                description,
                source='download',
                source_url=url
            )
            return filename
        finally:
            # Clean up temp file
            if temp_path.exists():
                temp_path.unlink()

    def list_images(self, category: Optional[str] = None, tags: Optional[List[str]] = None):
        """List images with optional filtering"""
        table = Table(title="Image Inventory")
        table.add_column("Filename")
        table.add_column("Category")
        table.add_column("Tags")
        table.add_column("Dimensions")
        table.add_column("Date Added")

        filtered_images = self.metadata['images'].items()
        
        if category:
            filtered_images = [
                (k, v) for k, v in filtered_images 
                if v['category'] == category
            ]
        
        if tags:
            filtered_images = [
                (k, v) for k, v in filtered_images 
                if all(tag in v['tags'] for tag in tags)
            ]

        for filename, data in filtered_images:
            table.add_row(
                filename,
                data['category'],
                ", ".join(data['tags']),
                f"{data['width']}x{data['height']}",
                data['date_added'].split('T')[0]
            )

        console.print(table)

    def export_metadata(self, format: str = 'csv'):
        """Export metadata to CSV or Excel"""
        df = pd.DataFrame.from_dict(self.metadata['images'], orient='index')
        
        if format == 'csv':
            output_path = self.base_path / 'utils' / 'image_inventory.csv'
            df.to_csv(output_path)
        elif format == 'excel':
            output_path = self.base_path / 'utils' / 'image_inventory.xlsx'
            df.to_excel(output_path)
        
        console.print(f"Metadata exported to {output_path}")

    def cleanup_unused(self):
        """Remove images that aren't referenced in metadata"""
        for file in self.raw_path.glob('*'):
            if file.name not in self.metadata['images']:
                file.unlink()
                console.print(f"Removed unused file: {file.name}")

def main():
    # Example usage
    manager = ImageManager("../")  # Adjust path as needed
    
    while True:
        console.print("\n[bold]Image Manager Menu[/bold]")
        console.print("1. Add new image")
        console.print("2. Download image from URL")
        console.print("3. List images")
        console.print("4. Export inventory")
        console.print("5. Cleanup unused files")
        console.print("6. Exit")
        
        choice = input("\nEnter your choice (1-6): ")
        
        if choice == "1":
            source_path = input("Enter image path: ")
            category = input("Enter category: ")
            tags = input("Enter tags (comma-separated): ").split(',')
            description = input("Enter description: ")
            manager.add_image(source_path, category, tags, description)
            
        elif choice == "2":
            url = input("Enter image URL: ")
            category = input("Enter category: ")
            tags = input("Enter tags (comma-separated): ").split(',')
            description = input("Enter description: ")
            manager.download_image(url, category, tags, description)
            
        elif choice == "3":
            category = input("Enter category to filter (or press Enter for all): ")
            tags_input = input("Enter tags to filter (comma-separated, or press Enter for all): ")
            tags = tags_input.split(',') if tags_input else None
            manager.list_images(category if category else None, tags)
            
        elif choice == "4":
            format = input("Enter export format (csv/excel): ")
            manager.export_metadata(format)
            
        elif choice == "5":
            manager.cleanup_unused()
            
        elif choice == "6":
            break

if __name__ == "__main__":
    main()
