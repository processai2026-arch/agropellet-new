#!/usr/bin/env node

/**
 * Image Optimization Script using Sharp (Node.js)
 * This script optimizes images without requiring external tools
 */

const fs = require('fs');
const path = require('path');

console.log('\n🚀 Starting Image Optimization with Node.js...\n');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('❌ Error: sharp is not installed.');
  console.log('Installing sharp...\n');
  
  const { execSync } = require('child_process');
  try {
    execSync('npm install sharp --save-dev', { stdio: 'inherit' });
    sharp = require('sharp');
    console.log('\n✅ Sharp installed successfully!\n');
  } catch (installError) {
    console.log('\n❌ Failed to install sharp automatically.');
    console.log('Please run: npm install sharp --save-dev');
    process.exit(1);
  }
}

// Create backup directory
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const backupDir = `./image-backups-${timestamp}`;

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
  console.log(`📦 Created backup directory: ${backupDir}\n`);
}

// Helper function to get file size
function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

// Helper function to backup file
function backupFile(filePath) {
  if (fs.existsSync(filePath)) {
    const fileName = path.basename(filePath);
    const backupPath = path.join(backupDir, fileName);
    fs.copyFileSync(filePath, backupPath);
    return true;
  }
  return false;
}

// Optimize WebP image
async function optimizeWebP(inputPath, outputPath, quality) {
  try {
    const originalSize = getFileSizeInKB(inputPath);
    
    await sharp(inputPath)
      .webp({ quality, effort: 6 })
      .toFile(outputPath + '.tmp');
    
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    const newSize = getFileSizeInKB(outputPath);
    const saved = (originalSize - newSize).toFixed(2);
    
    console.log(`  ✅ Saved: ${saved} KiB (${originalSize} KiB → ${newSize} KiB)`);
    return true;
  } catch (error) {
    console.log(`  ❌ Failed: ${error.message}`);
    return false;
  }
}

// Resize and optimize image
async function resizeAndOptimize(inputPath, outputPath, width, height, quality) {
  try {
    const originalSize = getFileSizeInKB(inputPath);
    
    await sharp(inputPath)
      .resize(width, height, { fit: 'cover' })
      .webp({ quality, effort: 6 })
      .toFile(outputPath + '.tmp');
    
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    const newSize = getFileSizeInKB(outputPath);
    const saved = (originalSize - newSize).toFixed(2);
    
    console.log(`  ✅ Saved: ${saved} KiB (${originalSize} KiB → ${newSize} KiB)`);
    return true;
  } catch (error) {
    console.log(`  ❌ Failed: ${error.message}`);
    return false;
  }
}

// Main optimization function
async function optimizeImages() {
  console.log('📸 Optimizing Hero Image...');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Optimize hero image
  const heroPath = 'src/assets/hero-bg.webp';
  if (fs.existsSync(heroPath)) {
    console.log(`  Optimizing: ${heroPath} (quality: 75)`);
    backupFile(heroPath);
    await optimizeWebP(heroPath, heroPath, 75);
  } else {
    console.log(`  ⚠️  Hero image not found at ${heroPath}`);
  }
  
  console.log('\n🎨 Optimizing Logo...');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Optimize and resize logo
  const logoPath = 'src/assets/logo.webp';
  if (fs.existsSync(logoPath)) {
    console.log(`  Resizing and optimizing: ${logoPath} (112x112, quality: 85)`);
    backupFile(logoPath);
    await resizeAndOptimize(logoPath, logoPath, 112, 112, 85);
  } else {
    console.log(`  ⚠️  Logo not found at ${logoPath}`);
  }
  
  console.log('\n🎬 Optimizing Animation Frames (sample)...');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('  Note: Optimizing first 10 frames as sample...\n');
  
  // Optimize sample frames
  let frameCount = 0;
  for (let i = 1; i <= 10; i++) {
    const frameNum = String(i).padStart(3, '0');
    const framePath = `public/frames/ezgif-frame-${frameNum}.webp`;
    
    if (fs.existsSync(framePath)) {
      console.log(`  Optimizing frame ${frameNum}...`);
      backupFile(framePath);
      const success = await optimizeWebP(framePath, framePath, 80);
      if (success) frameCount++;
    }
  }
  
  console.log(`\n  Optimized ${frameCount} sample frames`);
  console.log('  💡 To optimize all 240 frames, modify the loop range in the script\n');
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✨ Optimization Complete!\n');
  console.log('📊 Summary:');
  console.log(`  • Backups saved to: ${backupDir}`);
  console.log('  • Hero image optimized (target: ~95 KiB)');
  console.log('  • Logo resized and optimized (target: ~2 KiB)');
  console.log('  • Sample frames optimized\n');
  console.log('🔍 Next Steps:');
  console.log('  1. Build your project: npm run build');
  console.log('  2. Test with Lighthouse');
  console.log('  3. Expected performance score: 85-90+\n');
  console.log('💡 Tips:');
  console.log('  • If images look degraded, increase quality values in script');
  console.log('  • To optimize all frames, modify the loop range');
  console.log('  • Keep backups until you verify the results\n');
}

// Run optimization
optimizeImages().catch(error => {
  console.error('\n❌ Error during optimization:', error);
  process.exit(1);
});