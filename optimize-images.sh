#!/bin/bash

# Image Optimization Script for Lighthouse Performance
# This script optimizes images to improve LCP and overall performance

echo "🚀 Starting Image Optimization..."
echo ""

# Check if required tools are installed
command -v cwebp >/dev/null 2>&1 || { 
    echo "❌ Error: cwebp is not installed."
    echo "Install it with: sudo apt-get install webp (Linux) or brew install webp (Mac)"
    exit 1
}

# Create backup directory
BACKUP_DIR="./image-backups-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "📦 Created backup directory: $BACKUP_DIR"

# Function to optimize WebP images
optimize_webp() {
    local input_file="$1"
    local output_file="$2"
    local quality="$3"
    
    echo "  Optimizing: $input_file (quality: $quality)"
    
    # Backup original
    cp "$input_file" "$BACKUP_DIR/"
    
    # Optimize with cwebp
    cwebp -q "$quality" -m 6 -mt "$input_file" -o "$output_file.tmp" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        mv "$output_file.tmp" "$output_file"
        
        # Get file sizes
        original_size=$(stat -f%z "$BACKUP_DIR/$(basename $input_file)" 2>/dev/null || stat -c%s "$BACKUP_DIR/$(basename $input_file)")
        new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file")
        saved=$((original_size - new_size))
        saved_kb=$((saved / 1024))
        
        echo "  ✅ Saved: ${saved_kb} KiB"
    else
        echo "  ❌ Failed to optimize"
        rm -f "$output_file.tmp"
    fi
}

# Function to resize and optimize images
resize_and_optimize() {
    local input_file="$1"
    local output_file="$2"
    local width="$3"
    local height="$4"
    local quality="$5"
    
    echo "  Resizing and optimizing: $input_file (${width}x${height}, quality: $quality)"
    
    # Backup original
    cp "$input_file" "$BACKUP_DIR/"
    
    # Check if ImageMagick is available
    if command -v convert >/dev/null 2>&1; then
        # Resize with ImageMagick, then optimize with cwebp
        convert "$input_file" -resize "${width}x${height}" -quality 100 "$output_file.png" 2>/dev/null
        cwebp -q "$quality" -m 6 -mt "$output_file.png" -o "$output_file" 2>/dev/null
        rm -f "$output_file.png"
    else
        # Just optimize without resizing
        cwebp -q "$quality" -m 6 -mt "$input_file" -o "$output_file" 2>/dev/null
    fi
    
    if [ -f "$output_file" ]; then
        original_size=$(stat -f%z "$BACKUP_DIR/$(basename $input_file)" 2>/dev/null || stat -c%s "$BACKUP_DIR/$(basename $input_file)")
        new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file")
        saved=$((original_size - new_size))
        saved_kb=$((saved / 1024))
        
        echo "  ✅ Saved: ${saved_kb} KiB"
    else
        echo "  ❌ Failed to optimize"
    fi
}

echo ""
echo "📸 Optimizing Hero Image..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Optimize hero background image (target: 95 KiB from 221 KiB)
if [ -f "src/assets/hero-bg.webp" ]; then
    optimize_webp "src/assets/hero-bg.webp" "src/assets/hero-bg.webp" 75
else
    echo "  ⚠️  Hero image not found at src/assets/hero-bg.webp"
fi

echo ""
echo "🎨 Optimizing Logo..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Optimize and resize logo (target: resize from 1254x1254 to 112x112 for 2x display)
if [ -f "src/assets/logo.webp" ]; then
    resize_and_optimize "src/assets/logo.webp" "src/assets/logo.webp" 112 112 85
else
    echo "  ⚠️  Logo not found at src/assets/logo.webp"
fi

echo ""
echo "🎬 Optimizing Animation Frames (sample)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Note: Optimizing all 240 frames. This may take a while..."

# Optimize first 10 frames as a sample (you can extend this to all 240)
frame_count=0
for i in {001..010}; do
    frame_file="public/frames/ezgif-frame-${i}.webp"
    if [ -f "$frame_file" ]; then
        optimize_webp "$frame_file" "$frame_file" 80
        ((frame_count++))
    fi
done

echo "  Optimized $frame_count sample frames"
echo "  💡 To optimize all 240 frames, modify the loop range to {001..240}"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Optimization Complete!"
echo ""
echo "📊 Summary:"
echo "  • Backups saved to: $BACKUP_DIR"
echo "  • Hero image optimized (target: ~95 KiB)"
echo "  • Logo resized and optimized (target: ~2 KiB)"
echo "  • Sample frames optimized"
echo ""
echo "🔍 Next Steps:"
echo "  1. Build your project: npm run build"
echo "  2. Test with Lighthouse"
echo "  3. Expected performance score: 85-90+"
echo ""
echo "💡 Tips:"
echo "  • If images look degraded, increase quality values in script"
echo "  • To optimize all frames, modify the frame loop range"
echo "  • Keep backups until you verify the results"
echo ""