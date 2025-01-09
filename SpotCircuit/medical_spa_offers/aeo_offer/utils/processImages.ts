import { optimizeImage, getImageMetadata } from './imageOptimizer';
import path from 'path';
import fs from 'fs/promises';

const INPUT_DIR = path.join(__dirname, '../assets/raw');
const OUTPUT_DIR = path.join(__dirname, '../assets/optimized');

interface ImageConfig {
  name: string;
  sizes: {
    width: number;
    height: number;
    suffix: string;
  }[];
  quality?: number;
}

const imageConfigs: ImageConfig[] = [
  {
    name: 'hero',
    sizes: [
      { width: 2000, height: 1200, suffix: 'xl' },
      { width: 1200, height: 720, suffix: 'lg' },
      { width: 800, height: 480, suffix: 'md' },
      { width: 400, height: 240, suffix: 'sm' },
    ],
    quality: 85,
  },
  {
    name: 'equipment',
    sizes: [
      { width: 1200, height: 1200, suffix: 'xl' },
      { width: 800, height: 800, suffix: 'lg' },
      { width: 400, height: 400, suffix: 'md' },
    ],
    quality: 80,
  },
  // Add more configurations for other image types
];

async function processAllImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Get all images from input directory
    const files = await fs.readdir(INPUT_DIR);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to process`);

    for (const file of imageFiles) {
      const inputPath = path.join(INPUT_DIR, file);
      const metadata = await getImageMetadata(inputPath);
      console.log(`Processing ${file}:`, metadata);

      // Find matching config or use default
      const config = imageConfigs.find((c) =>
        file.toLowerCase().includes(c.name)
      ) || imageConfigs[0];

      await optimizeImage(inputPath, OUTPUT_DIR, {
        quality: config.quality,
        sizes: config.sizes,
        webp: true,
        avif: true,
      });

      console.log(`Optimized ${file}`);
    }

    console.log('All images processed successfully');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

// Run the script
if (require.main === module) {
  processAllImages();
}
