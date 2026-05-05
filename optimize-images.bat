@echo off
REM Image Optimization Script for Lighthouse Performance (Windows)
REM This script optimizes images to improve LCP and overall performance

echo.
echo 🚀 Starting Image Optimization...
echo.

REM Check if cwebp is available
where cwebp >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error: cwebp is not installed.
    echo Download from: https://developers.google.com/speed/webp/download
    echo Add to PATH or place cwebp.exe in this directory
    pause
    exit /b 1
)

REM Create backup directory
set BACKUP_DIR=image-backups-%date:~-4,4%%date:~-10,2%%date:~-7,2%-%time:~0,2%%time:~3,2%%time:~6,2%
set BACKUP_DIR=%BACKUP_DIR: =0%
mkdir "%BACKUP_DIR%" 2>nul
echo 📦 Created backup directory: %BACKUP_DIR%

echo.
echo 📸 Optimizing Hero Image...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "src\assets\hero-bg.webp" (
    echo   Optimizing: src\assets\hero-bg.webp
    copy "src\assets\hero-bg.webp" "%BACKUP_DIR%\" >nul
    cwebp -q 75 -m 6 -mt "src\assets\hero-bg.webp" -o "src\assets\hero-bg.webp.tmp" 2>nul
    if exist "src\assets\hero-bg.webp.tmp" (
        move /y "src\assets\hero-bg.webp.tmp" "src\assets\hero-bg.webp" >nul
        echo   ✅ Hero image optimized
    ) else (
        echo   ❌ Failed to optimize hero image
    )
) else (
    echo   ⚠️  Hero image not found at src\assets\hero-bg.webp
)

echo.
echo 🎨 Optimizing Logo...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "src\assets\logo.webp" (
    echo   Optimizing: src\assets\logo.webp
    copy "src\assets\logo.webp" "%BACKUP_DIR%\" >nul
    cwebp -q 85 -m 6 -mt "src\assets\logo.webp" -o "src\assets\logo.webp.tmp" 2>nul
    if exist "src\assets\logo.webp.tmp" (
        move /y "src\assets\logo.webp.tmp" "src\assets\logo.webp" >nul
        echo   ✅ Logo optimized
    ) else (
        echo   ❌ Failed to optimize logo
    )
) else (
    echo   ⚠️  Logo not found at src\assets\logo.webp
)

echo.
echo 🎬 Optimizing Animation Frames (sample)...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   Note: Optimizing first 10 frames as sample...

set frame_count=0
for /L %%i in (1,1,10) do (
    set "num=00%%i"
    set "num=!num:~-3!"
    set "frame_file=public\frames\ezgif-frame-!num!.webp"
    
    if exist "!frame_file!" (
        copy "!frame_file!" "%BACKUP_DIR%\" >nul 2>nul
        cwebp -q 80 -m 6 -mt "!frame_file!" -o "!frame_file!.tmp" 2>nul
        if exist "!frame_file!.tmp" (
            move /y "!frame_file!.tmp" "!frame_file!" >nul
            set /a frame_count+=1
        )
    )
)

echo   Optimized %frame_count% sample frames
echo   💡 To optimize all 240 frames, modify the loop range in the script

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo ✨ Optimization Complete!
echo.
echo 📊 Summary:
echo   • Backups saved to: %BACKUP_DIR%
echo   • Hero image optimized (target: ~95 KiB)
echo   • Logo optimized
echo   • Sample frames optimized
echo.
echo 🔍 Next Steps:
echo   1. Build your project: npm run build
echo   2. Test with Lighthouse
echo   3. Expected performance score: 85-90+
echo.
echo 💡 Tips:
echo   • If images look degraded, increase quality values in script
echo   • To optimize all frames, modify the loop range
echo   • Keep backups until you verify the results
echo.
pause