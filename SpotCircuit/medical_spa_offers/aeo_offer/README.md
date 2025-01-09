# SpotCircuit AEO Landing Page

This directory contains the landing page and assets for SpotCircuit's Aesthetic Equipment Optimization (AEO) offer targeting medical spas.

## Directory Structure

```
aeo_offer/
├── assets/           # Images, icons, and other media files
├── components/       # React components for the landing page
├── styles/          # CSS and styling files
├── content/         # Content files (copy, testimonials, etc.)
├── utils/           # Utility scripts and tools
└── checklist.md     # Project implementation checklist
```

## Getting Started

1. Review the `checklist.md` for implementation tasks
2. Add assets to the `assets` directory
3. Create components in the `components` directory
4. Update content in the `content` directory

## Image Finder Tool

Located in `utils/image_finder_web.py`, this tool helps you find and download images for the landing page:

### Features
- Dual-source image search from Pixabay and Pexels
- Independent image grids with separate pagination
- Category-based image selection
- Automatic image resizing based on landing page requirements
- Timestamp-based file naming to avoid conflicts

### Usage
1. Start the server:
   ```bash
   python utils/image_finder_web.py
   ```
2. Open http://localhost:5000 in your browser
3. Search for medical spa related images
4. Select images and assign categories (hero, background, etc.)
5. Click "Download Selected" to save images to assets/images

### Requirements
- Python 3.x
- Flask
- Pillow
- Requests
- API keys for Pixabay and Pexels (set in .env file)

## Design Guidelines

- Clean, professional aesthetic
- Mobile-first approach
- Medical spa industry focus
- Emphasis on equipment optimization
- Clear call-to-actions

## Image Categories and Dimensions
All image categories and their required dimensions are defined in `utils/image_config.json`. Current categories include:
- Hero section images
- Background images
- Feature section images
- Testimonial section images
