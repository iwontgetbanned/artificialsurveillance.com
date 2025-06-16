#!/bin/bash

# Artificial Surveillance Website - EC2 Deployment Script
# This script automates the deployment of the React app on Ubuntu EC2

set -e  # Exit on any error

echo "🚀 Starting deployment of Artificial Surveillance website..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root. Run as ubuntu user."
   exit 1
fi

# Update system
print_status "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
print_status "Installing Node.js 18..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    print_success "Node.js is already installed ($(node --version))"
fi

# Install nginx
print_status "Installing nginx..."
if ! command -v nginx &> /dev/null; then
    sudo apt install nginx -y
    sudo systemctl enable nginx
else
    print_success "nginx is already installed"
fi

# Install git
print_status "Installing git..."
if ! command -v git &> /dev/null; then
    sudo apt install git -y
else
    print_success "git is already installed"
fi

# Clone or update repository
REPO_DIR="/home/ubuntu/artificialsurveillance.com"
if [ -d "$REPO_DIR" ]; then
    print_status "Repository exists, updating..."
    cd "$REPO_DIR"
    git pull origin main
else
    print_status "Cloning repository..."
    cd /home/ubuntu
    git clone https://github.com/iwontgetbanned/artificialsurveillance.com.git
    cd artificialsurveillance.com
fi

# Install dependencies and build
print_status "Installing npm dependencies..."
npm install

print_status "Building the application..."
npm run build

# Backup existing nginx files
if [ -d "/var/www/html" ] && [ "$(ls -A /var/www/html)" ]; then
    print_status "Backing up existing nginx files..."
    sudo mkdir -p /var/www/backup/$(date +%Y%m%d_%H%M%S)
    sudo cp -r /var/www/html/* /var/www/backup/$(date +%Y%m%d_%H%M%S)/ 2>/dev/null || true
fi

# Copy built files to nginx directory
print_status "Deploying built files to nginx..."
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# Configure nginx
print_status "Configuring nginx..."
sudo tee /etc/nginx/sites-available/artificialsurveillance > /dev/null <<'EOF'
server {
    listen 80;
    server_name _;

    root /var/www/html;
    index index.html;

    # Handle React Router (SPA routing)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optimize static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|mp4)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline' 'unsafe-eval'" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/artificialsurveillance /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
print_status "Testing nginx configuration..."
if sudo nginx -t; then
    print_success "nginx configuration is valid"
else
    print_error "nginx configuration test failed"
    exit 1
fi

# Configure firewall
print_status "Configuring firewall..."
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
echo "y" | sudo ufw enable

# Start/restart nginx
print_status "Starting nginx..."
sudo systemctl restart nginx

# Create update script
print_status "Creating update script..."
sudo tee /home/ubuntu/update-site.sh > /dev/null <<'EOF'
#!/bin/bash
echo "🔄 Updating Artificial Surveillance website..."
cd /home/ubuntu/artificialsurveillance.com
git pull origin main
npm install
npm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl reload nginx
echo "✅ Update completed at $(date)"
EOF

chmod +x /home/ubuntu/update-site.sh

# Get public IP
PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo "Unable to get IP")

print_success "🎉 Deployment completed successfully!"
echo ""
echo "📋 Deployment Summary:"
echo "====================="
echo "• Website URL: http://$PUBLIC_IP"
echo "• Source code: $REPO_DIR"
echo "• Nginx config: /etc/nginx/sites-available/artificialsurveillance"
echo "• Web files: /var/www/html"
echo "• Update script: /home/ubuntu/update-site.sh"
echo ""
echo "🔧 Next steps:"
echo "• Point your domain to this IP: $PUBLIC_IP"
echo "• Set up SSL certificate with: sudo certbot --nginx -d yourdomain.com"
echo "• Run updates with: ./update-site.sh"
echo ""
print_success "Your Artificial Surveillance website is now live! 🌐"
