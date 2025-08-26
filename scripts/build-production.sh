#!/bin/bash

# Production Build Script for DEEPSIX DEV Portfolio
# This script optimizes the build for production deployment

echo "🚀 Starting Production Build for DEEPSIX DEV Portfolio..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out
rm -rf dist
rm -rf node_modules/.cache

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Type checking
echo "🔍 Running type checks..."
npm run type-check

# Linting
echo "✨ Running linting..."
npm run lint

# Production build
echo "🏗️ Building for production..."
NODE_ENV=production npm run build

# Analyze bundle (optional)
if [ "$1" = "--analyze" ]; then
    echo "📊 Analyzing bundle..."
    npm run build:analyze
fi

# Create production package
echo "📦 Creating production package..."
mkdir -p production
cp -r .next production/
cp -r public production/
cp package.json production/
cp next.config.js production/
cp tailwind.config.js production/
cp postcss.config.js production/
cp tsconfig.json production/

# Create deployment instructions
cat > production/DEPLOYMENT.md << 'EOF'
# DEEPSIX DEV Portfolio - Deployment Instructions

## For Hostinger Deployment:

### 1. Upload Files
- Upload all contents of this folder to your Hostinger hosting
- Ensure `.next` folder is uploaded completely

### 2. Set Environment Variables
Create a `.env.local` file with:
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 3. Install Dependencies
```bash
npm ci --production
```

### 4. Start the Application
```bash
npm start
```

### 5. Configure Domain
- Point your domain to the hosting directory
- Ensure SSL is enabled

### 6. Performance Monitoring
- Monitor Core Web Vitals
- Check Lighthouse scores
- Monitor server response times

## Performance Features:
✅ Optimized images and fonts
✅ Code splitting and tree shaking
✅ CSS optimization
✅ Security headers
✅ Caching strategies
✅ Mobile-first responsive design

## Contact Support:
- Email: info@deepsixx.com
- GitHub: https://github.com/Deepsix-AJ
EOF

echo "✅ Production build completed successfully!"
echo "📁 Production files are in the 'production' folder"
echo "📋 Check DEPLOYMENT.md for deployment instructions"
echo "🚀 Ready for Hostinger deployment!"
