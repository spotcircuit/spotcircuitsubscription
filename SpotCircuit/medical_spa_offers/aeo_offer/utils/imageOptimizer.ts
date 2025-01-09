import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

interface ImageSize {
  width: number;
  height: number;
  suffix: string;
}

interface OptimizeOptions {
  quality?: number;
  sizes?: ImageSize[];
  webp?: boolean;
  avif?: boolean;
}

const defaultSizes: ImageSize[] = [
  { width: 2000, height: 1200, suffix: 'xl' },
  { width: 1200, height: 800, suffix: 'lg' },
  { width: 800, height: 600, suffix: 'md' },
  { width: 400, height: 300, suffix: 'sm' },
];

const defaultOptions: OptimizeOptions = {
  quality: 80,
  sizes: defaultSizes,
  webp: true,
  avif: true,
};

export async function optimizeImage(
  inputPath: string,
  outputDir: string,
  options: OptimizeOptions = defaultOptions
) {
  const { quality, sizes, webp, avif } = { ...defaultOptions, ...options };
  const filename = path.basename(inputPath, path.extname(inputPath));

  // Create output directory if it doesn't exist
  await fs.mkdir(outputDir, { recursive: true });

  // Process each size
  for (const size of sizes!) {
    const image = sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center',
      })
      .withMetadata();

    // Original format (jpg/png)
    await image
      .jpeg({ quality })
      .toFile(path.join(outputDir, `${filename}-${size.suffix}.jpg`));

    // WebP format
    if (webp) {
      await image
        .webp({ quality })
        .toFile(path.join(outputDir, `${filename}-${size.suffix}.webp`));
    }

    // AVIF format
    if (avif) {
      await image
        .avif({ quality })
        .toFile(path.join(outputDir, `${filename}-${size.suffix}.avif`));
    }
  }

  return {
    message: 'Image optimization complete',
    outputDir,
    formats: {
      jpg: true,
      webp: webp,
      avif: avif,
    },
    sizes: sizes,
  };
}

// Image metadata helper
export async function getImageMetadata(inputPath: string) {
  const metadata = await sharp(inputPath).metadata();
  return {
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    size: metadata.size,
    hasAlpha: metadata.hasAlpha,
    channels: metadata.channels,
  };
}

// Generate responsive image HTML
export function generateResponsiveImageHTML(
  imagePath: string,
  sizes: ImageSize[],
  alt: string,
  className?: string
) {
  const filename = path.basename(imagePath, path.extname(imagePath));
  const srcset = sizes
    .map(
      (size) =>
        `${filename}-${size.suffix}.webp ${size.width}w, ${filename}-${size.suffix}.jpg ${size.width}w`
    )
    .join(', ');

  return `
<picture class="${className || ''}">
  ${sizes
    .map(
      (size) => `
  <source
    media="(min-width: ${size.width}px)"
    srcset="${filename}-${size.suffix}.webp"
    type="image/webp"
  />`
    )
    .join('')}
  <img
    src="${filename}-${sizes[0].suffix}.jpg"
    srcset="${srcset}"
    sizes="(max-width: ${sizes[0].width}px) 100vw, ${sizes[0].width}px"
    alt="${alt}"
    loading="lazy"
    class="${className || ''}"
  />
</picture>`;
}
