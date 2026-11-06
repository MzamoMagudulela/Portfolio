@echo off
echo ========================================================
echo  Deploying Digital Dimension Portfolio to GitHub Pages
echo ========================================================
echo.
git push -u origin main
echo.
if %errorlevel% neq 0 (
  echo [!] Push failed. Please make sure:
  echo     1. The repository 'MzamoMagudulela.github.io' is created on GitHub.
  echo     2. You are signed in to your GitHub account.
) else (
  echo [✓] Code pushed successfully!
  echo     GitHub Actions is now deploying your portfolio.
  echo     Live URL: https://MzamoMagudulela.github.io/
)
pause
