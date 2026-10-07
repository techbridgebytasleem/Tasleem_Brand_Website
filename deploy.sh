#!/bin/bash

echo "🚀 Starting deployment..."
echo "📅 Time: $(date)"

cd /home/Tasleem_Brand_Website

# Pull latest changes from GitHub
echo "📥 Pulling latest code from GitHub..."
git pull origin main || { echo "❌ Git pull failed"; exit 1; }

# Install dependencies
echo "📦 Installing dependencies..."
npm install || { echo "❌ npm install failed"; exit 1; }

# Build the project
echo "🔨 Building project..."
npm run build || { echo "❌ npm build failed"; exit 1; }

# Stop the old PM2 process
echo "🛑 Stopping old process..."
pm2 stop tasleem-portfolio || true

# Clean cache (helps with any build issues)
rm -rf .next/cache

# Start/restart with PM2
echo "▶️ Starting application..."
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

echo "✅ Deployment complete!"
echo "📝 Logs available at: pm2 logs tasleem-portfolio"
