#!/bin/bash
# Railway Deployment Quick Commands

# Copy this script to your project root and run with: bash deploy.sh

echo "🚀 Employee UI - Railway Deployment Helper"
echo "=========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

echo "✅ Docker found"
echo ""

# Check if code is committed
if [ -z "$(git diff --name-only)" ]; then
    echo "✅ All changes are committed"
else
    echo "⚠️  Uncommitted changes detected:"
    git diff --name-only
    echo ""
    echo "Run: git add . && git commit -m 'Your message'"
    exit 1
fi

echo ""
echo "📦 Building Docker image locally..."
docker build -t employee-ui:latest . --no-cache

if [ $? -eq 0 ]; then
    echo "✅ Docker build successful!"
    echo ""
    echo "🧪 Testing container locally..."
    echo "Run: docker run -p 8080:80 employee-ui:latest"
    echo "Then visit: http://localhost:8080"
    echo ""
    echo "🚀 Ready to deploy to Railway!"
    echo "1. Push to GitHub: git push origin main"
    echo "2. Go to: https://railway.app/dashboard"
    echo "3. Create new project and select this GitHub repo"
    echo "4. Set API_URL environment variable"
    echo "5. Deploy!"
else
    echo "❌ Docker build failed!"
    exit 1
fi

echo ""
echo "📚 Documentation:"
echo "  - Quick Start: RAILWAY_QUICKSTART.md"
echo "  - Full Guide: DEPLOYMENT.md"
echo "  - Status Report: DEPLOYMENT_STATUS.md"
