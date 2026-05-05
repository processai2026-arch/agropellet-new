@echo off
REM Image Conversion Script for Agro Power Pellet (Windows)
REM This script converts JPG/PNG images to WebP format for better performance

echo Converting images to WebP format...

REM Check if sharp-cli is installed
where sharp >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing sharp-cli...
    call npm install -g sharp-cli
)

REM Create backup directories
if not exist "public\assets\backup" mkdir "public\assets\backup"
if not exist "public\frames\backup" mkdir "public\frames\backup"

REM Convert hero image
echo Converting hero image...
if exist "public\assets\hero-bg-XF6ryQZF.jpg" (
    copy "public\assets\hero-bg-XF6ryQZF.jpg" "public\assets\backup\"
    npx sharp -i public\assets\hero-bg-XF6ryQZF.jpg -o public\assets\hero-bg-XF6ryQZF.webp --webp "{\"quality\":80}"
    echo Hero image converted
)

REM Convert logo
echo Converting logo...
if exist "public\assets\logo-CQxXZxNH.png" (
    copy "public\assets\logo-CQxXZxNH.png" "public\assets\backup\"
    npx sharp -i public\assets\logo-CQxXZxNH.png -o public\assets\logo-CQxXZxNH.webp --webp "{\"quality\":90}"
    echo Logo converted
)

REM Convert frame images
echo Converting frame images...
for %%f in (public\frames\*.jpg) do (
    copy "%%f" "public\frames\backup\"
    npx sharp -i "%%f" -o "%%~dpnf.webp" --webp "{\"quality\":80}"
    echo Converted %%~nxf
)

echo.
echo Image conversion complete!
echo Original images backed up in public\assets\backup and public\frames\backup
echo.
echo Next steps:
echo 1. Run 'npm install' to install dependencies
echo 2. Run 'npm run build' to build the optimized site
echo 3. Test with 'npm run preview'
echo 4. Deploy to production

pause