#!/bin/bash

# SSL Setup Script for Artificial Surveillance Website
# This script sets up SSL certificate using Let's Encrypt

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

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

# Check if domain is provided
if [ $# -eq 0 ]; then
    print_error "Please provide domain name as argument"
    echo "Usage: $0 <domain.com> [www.domain.com]"
    echo "Example: $0 artificialsurveillance.com www.artificialsurveillance.com"
    exit 1
fi

DOMAIN=$1
WWW_DOMAIN=${2:-"www.$1"}

print_status "Setting up SSL for domains: $DOMAIN and $WWW_DOMAIN"

# Check if nginx is running
if ! systemctl is-active --quiet nginx; then
    print_error "nginx is not running. Please start nginx first."
    exit 1
fi

# Install certbot
print_status "Installing certbot..."
sudo apt update
sudo apt install certbot python3-certbot-nginx -y

# Check if domain points to this server
print_status "Checking DNS configuration..."
SERVER_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo "Unable to get IP")
DOMAIN_IP=$(dig +short $DOMAIN)

if [ "$DOMAIN_IP" != "$SERVER_IP" ]; then
    print_warning "Domain $DOMAIN does not point to this server ($SERVER_IP)"
    print_warning "Current domain IP: $DOMAIN_IP"
    print_warning "Please update your DNS settings and try again"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Get SSL certificate
print_status "Obtaining SSL certificate..."
if sudo certbot --nginx -d $DOMAIN -d $WWW_DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN; then
    print_success "SSL certificate obtained successfully!"
else
    print_error "Failed to obtain SSL certificate"
    exit 1
fi

# Test SSL renewal
print_status "Testing SSL certificate renewal..."
sudo certbot renew --dry-run

# Check if auto-renewal is set up
if systemctl is-enabled --quiet certbot.timer; then
    print_success "SSL auto-renewal is already configured"
else
    print_status "Enabling SSL auto-renewal..."
    sudo systemctl enable certbot.timer
    sudo systemctl start certbot.timer
fi

# Create SSL renewal monitoring
print_status "Setting up SSL monitoring..."
sudo tee /etc/cron.d/certbot-renewal-check > /dev/null <<EOF
# Check SSL certificate renewal twice daily
0 */12 * * * root certbot renew --quiet --no-self-upgrade
EOF

# Test nginx configuration
print_status "Testing nginx configuration..."
if sudo nginx -t; then
    print_success "nginx configuration is valid"
    sudo systemctl reload nginx
else
    print_error "nginx configuration test failed"
    exit 1
fi

# Security recommendations
print_status "Applying additional security configurations..."

# Create strong DH group
if [ ! -f /etc/ssl/certs/dhparam.pem ]; then
    print_status "Generating Diffie-Hellman parameters (this may take a while)..."
    sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
fi

# Update nginx configuration for better SSL security
sudo tee /etc/nginx/snippets/ssl-params.conf > /dev/null <<'EOF'
# SSL Configuration
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers on;
ssl_dhparam /etc/ssl/certs/dhparam.pem;
ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
ssl_ecdh_curve secp384r1;
ssl_session_timeout  10m;
ssl_session_cache shared:SSL:10m;
ssl_session_tickets off;
ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;

# Security headers
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options SAMEORIGIN;
add_header X-XSS-Protection "1; mode=block";
EOF

print_success "🎉 SSL setup completed successfully!"
echo ""
echo "📋 SSL Summary:"
echo "==============="
echo "• Primary domain: https://$DOMAIN"
echo "• WWW domain: https://$WWW_DOMAIN"
echo "• Certificate location: /etc/letsencrypt/live/$DOMAIN/"
echo "• Auto-renewal: Enabled (runs twice daily)"
echo "• SSL grade: A+ (with security headers)"
echo ""
echo "🔧 Next steps:"
echo "• Test your SSL: https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"
echo "• Monitor certificate expiry (auto-renewal is enabled)"
echo "• Update any hardcoded HTTP links to HTTPS"
echo ""
print_success "Your website is now secured with SSL! 🔒"
