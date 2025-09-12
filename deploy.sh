#!/bin/bash

# Deploy script for Madhuban Public School website to GitHub Pages

echo "🚀 Starting deployment process..."

# Build the Angular application
echo "📦 Building Angular application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Navigate to the dist folder
    cd dist/madhuban-public-school/browser
    
    # Initialize git if not already initialized
    if [ ! -d ".git" ]; then
        git init
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    fi
    
    # Add all files
    git add .
    
    # Commit changes
    git commit -m "Deploy: Update website $(date)"
    
    # Push to gh-pages branch
    echo "🌐 Deploying to GitHub Pages..."
    git push origin HEAD:gh-pages --force
    
    echo "🎉 Deployment completed successfully!"
    echo "Your website should be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
