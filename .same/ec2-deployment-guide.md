# EC2 Deployment Guide for Artificial Surveillance Website

## Prerequisites
- EC2 instance running Ubuntu 22.04 LTS or newer
- SSH access to your EC2 instance
- Domain name pointed to your EC2 instance (optional)

## Option 1: Static Site with Nginx (Recommended)

### Step 1: Install Dependencies on EC2
```bash
# Connect to your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+ and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install nginx
sudo apt install nginx -y

# Install git
sudo apt install git -y
```

### Step 2: Clone and Build the Project
```bash
# Clone the repository
git clone https://github.com/iwontgetbanned/artificialsurveillance.com.git
cd artificialsurveillance.com

# Install dependencies
npm install

# Build the project
npm run build
```

### Step 3: Configure Nginx
```bash
# Copy built files to nginx directory
sudo cp -r dist/* /var/www/html/

# Create nginx configuration
sudo tee /etc/nginx/sites-available/artificialsurveillance > /dev/null <<EOF
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain or EC2 public IP

    root /var/www/html;
    index index.html;

    # Handle React Router (SPA routing)
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Optimize static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
EOF

# Enable the site
sudo ln -s /etc/nginx/sites-available/artificialsurveillance /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Start and enable nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Step 4: Configure Firewall
```bash
# Allow HTTP and HTTPS traffic
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable
```

## Option 2: Docker Deployment

### Step 1: Install Docker
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu
```

### Step 2: Create Dockerfile
```dockerfile
# Create Dockerfile in project root
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Step 3: Deploy with Docker
```bash
# Build and run
docker build -t artificialsurveillance .
docker run -d -p 80:80 --name artificialsurveillance-app artificialsurveillance
```

## Option 3: SSL with Let's Encrypt (Recommended for Production)

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal is set up automatically
sudo systemctl status certbot.timer
```

## Continuous Deployment Script

```bash
#!/bin/bash
# Create auto-deploy.sh for easy updates

cd /home/ubuntu/artificialsurveillance.com
git pull origin main
npm install
npm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl reload nginx
echo "Deployment completed at $(date)"
```

## Monitoring and Logs

```bash
# Check nginx status
sudo systemctl status nginx

# View nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Check disk space
df -h

# Monitor system resources
htop
```

## Security Recommendations

1. **Update system regularly**: `sudo apt update && sudo apt upgrade`
2. **Configure fail2ban**: `sudo apt install fail2ban`
3. **Use SSH keys only**: Disable password authentication
4. **Regular backups**: Set up automated backups
5. **Monitor logs**: Set up log monitoring and alerts

## Quick Start Commands

After setting up your EC2 instance, run this one-liner:

```bash
curl -sSL https://raw.githubusercontent.com/iwontgetbanned/artificialsurveillance.com/main/scripts/ec2-deploy.sh | bash
```

(We'll create this script next)

Your site will be available at:
- HTTP: `http://your-ec2-public-ip`
- HTTPS: `https://your-domain.com` (if SSL configured)
