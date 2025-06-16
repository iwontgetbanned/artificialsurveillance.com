#!/bin/bash

# SSL Setup for Docker Deployment
# Run this script after getting your SSL certificate

set -e

echo "🔒 Setting up SSL for Docker deployment..."

# Check if SSL certificate exists (using sudo since certs are owned by root)
if ! sudo test -f "/etc/letsencrypt/live/artificialsurveillance.com/fullchain.pem"; then
    echo "❌ SSL certificate not found!"
    echo "Please run: sudo certbot certonly --standalone -d artificialsurveillance.com"
    echo "Make sure to stop Docker first: docker-compose down"
    exit 1
fi

echo "✅ SSL certificate found"

# Stop current container
echo "🛑 Stopping current Docker container..."
docker-compose down

# Create logs directory if it doesn't exist
mkdir -p logs

# Start with SSL configuration
echo "🚀 Starting Docker with SSL support..."
docker-compose -f docker-compose.ssl.yml up -d

# Wait a moment for container to start
sleep 5

# Check if container is running
if docker ps | grep -q artificialsurveillance-web; then
    echo "✅ Container started successfully"

    # Get public IP
    PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo "Unable to get IP")

    echo ""
    echo "🎉 SSL setup complete!"
    echo "================================"
    echo "• HTTP (redirects to HTTPS): http://artificialsurveillance.com"
    echo "• HTTPS: https://artificialsurveillance.com"
    echo "• Server IP: $PUBLIC_IP"
    echo ""
    echo "🔧 To test:"
    echo "curl -I https://artificialsurveillance.com"
    echo ""
    echo "📊 To monitor:"
    echo "docker-compose -f docker-compose.ssl.yml logs -f"

else
    echo "❌ Container failed to start. Check logs:"
    docker-compose -f docker-compose.ssl.yml logs
fi
