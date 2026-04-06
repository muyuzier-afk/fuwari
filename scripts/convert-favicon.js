import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public', 'favicon', 'favicon-icon.webp');
const outputDir = path.join(process.cwd(), 'public', 'favicon');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 不同尺寸的favicon
const sizes = [32, 128, 180, 192];

async function convertFavicons() {
  try {
    for (const size of sizes) {
      // 生成浅色版本
      await sharp(inputPath)
        .resize(size, size)
        .toFile(path.join(outputDir, `favicon-light-${size}.png`));
      
      // 生成深色版本（简单处理，实际可能需要更复杂的处理）
      await sharp(inputPath)
        .resize(size, size)
        .toFile(path.join(outputDir, `favicon-dark-${size}.png`));
      
      console.log(`Generated favicon-${size}.png`);
    }
    
    // 生成favicon.ico
    await sharp(inputPath)
      .resize(32, 32)
      .toFile(path.join(process.cwd(), 'public', 'favicon.ico'));
    
    console.log('Generated favicon.ico');
    
  } catch (error) {
    console.error('Error converting favicons:', error);
  }
}

convertFavicons();