#!/bin/bash

# Image Conversion Script for Agro Power Pellet
# This script converts JPG/PNG images to WebP format for better performance

echo "🖼️  Converting images to WebP format..."

# Check if sharp-cli is installed
if ! command -v sharp &> /dev/null; then
    echo "📦 Installing sharp-cli..."
    npm install -g sharp-cli
fi

# Create backup directory
mkdir -p public/assets/backup
mkdir -p public/frames/backup

# Convert hero image
echo "Converting hero image..."
if [ -f "public/assets/hero-bg-XF6ryQZF.jpg" ]; then
    cp public/assets/hero-bg-XF6ryQZF.jpg public/assets/backup/
    npx sharp -i public/assets/hero-bg-XF6ryQZF.jpg -o public/assets/hero-bg-XF6ryQZF.webp --webp '{"quality":80}'
    echo "✅ Hero image converted"
fi

# Convert logo
echo "Converting logo..."
if [ -f "public/assets/logo-CQxXZxNH.png" ]; then
    cp public/assets/logo-CQxXZxNH.png public/assets/backup/
    npx sharp -i public/assets/logo-CQxXZxNH.png -o public/assets/logo-CQxXZxNH.webp --webp '{"quality":90}'
    echo "✅ Logo converted"
fi

# Convert frame images
echo "Converting frame images..."
for file in public/frames/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        cp "$file" "public/frames/backup/"
        npx sharp -i "$file" -o "${file%.jpg}.webp" --webp '{"quality":80}'
        echo "✅ Converted $filename"
    fi
done

echo ""
echo "🎉 Image conversion complete!"
echo "📁 Original images backed up in public/assets/backup and public/frames/backup"
echo ""
echo "Next steps:"
echo "1. Run 'npm install' to install dependencies"
echo "2. Run 'npm run build' to build the optimized site"
echo "3. Test with 'npm run preview'"
echo "4. Deploy to production"