# Complete EC2 Deployment Guide
## Artificial Surveillance Website with Docker & SSL

---

## Prerequisites

### 1. AWS EC2 Instance Setup
- **Instance Type**: t3.small or larger (recommended)
- **Operating System**: Ubuntu 22.04 LTS
- **Storage**: 20GB minimum
- **Security Groups**: Allow inbound traffic on:
  - Port 22 (SSH)
  - Port 80 (HTTP)
  - Port 443 (HTTPS)

### 2. Domain Setup (Required for SSL)
- Point your domain's A record to your EC2 public IP
- Example: artificialsurveillance.com → 3.136.124.236
- Allow 5-10 minutes for DNS propagation

### 3. Required Information
- EC2 public IP address
- Domain name
- SSH key pair (.pem file)
- Email address for SSL certificate

---

## Step 1: Initial Server Setup

### Connect to EC2 Instance
```bash
# Replace with your actual key and IP
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### Install Docker
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installations
docker --version
docker-compose --version
```

### Install Additional Tools
```bash
sudo apt install git curl nano htop -y
```

---

## Step 2: Deploy the Website

### Clone Repository
```bash
cd ~
git clone https://github.com/iwontgetbanned/artificialsurveillance.com.git
cd artificialsurveillance.com
```

### Initial Docker Deployment (HTTP Only)
```bash
# Build and start the container
docker-compose up -d

# Verify it's running
docker ps

# Test basic functionality
curl -I http://localhost/
```

**Test**: Open browser to `http://your-ec2-ip` - website should load

---

## Step 3: SSL Certificate Setup

### Stop Docker Container
```bash
docker-compose down
```

### Get SSL Certificate
```bash
# Install certbot
sudo apt install certbot -y

# Get certificate (replace with your domain)
sudo certbot certonly --standalone -d artificialsurveillance.com

# Follow prompts:
# - Enter email address
# - Agree to terms (Y)
# - Share email with EFF (Y/N - your choice)
```

**Important**: Make sure port 80 is free when running certbot

---

## Step 4: Enable SSL in Docker

### Run SSL Setup Script
```bash
# Make script executable
chmod +x setup-docker-ssl.sh

# Run SSL setup
./setup-docker-ssl.sh
```

### Expected Output
```
🔒 Setting up SSL for Docker deployment...
✅ SSL certificate found
🛑 Stopping current Docker container...
🚀 Starting Docker with SSL support...
✅ Container started successfully
🎉 SSL setup complete!
```

---

## Step 5: Verification

### Test HTTPS
```bash
# Test HTTPS (should return 200 OK)
curl -I https://artificialsurveillance.com

# Test HTTP redirect (should return 301)
curl -I http://artificialsurveillance.com

# Check container status
docker ps
```

### Browser Tests
1. **HTTPS**: https://artificialsurveillance.com (should load securely)
2. **HTTP**: http://artificialsurveillance.com (should redirect to HTTPS)
3. **SSL Test**: https://www.ssllabs.com/ssltest/ (should get A+ rating)

---

## Step 6: Monitoring Setup

### Auto-Renewal for SSL
```bash
# Test renewal
sudo certbot renew --dry-run

# Add to crontab for auto-renewal
sudo crontab -e

# Add this line (select nano editor if prompted):
0 */12 * * * /usr/bin/certbot renew --quiet --no-self-upgrade && cd /home/ubuntu/artificialsurveillance.com && docker-compose -f docker-compose.ssl.yml restart
```

### Monitoring Commands
```bash
# View real-time logs
docker-compose -f docker-compose.ssl.yml logs -f

# Check resource usage
docker stats

# Check container health
docker ps

# Check certificate status
sudo certbot certificates
```

---

## Making Updates to the Website

### Method 1: Simple Content Updates

For text, image, or configuration changes:

1. **Make changes to your GitHub repository**:
   - Edit files directly on GitHub.com, or
   - Clone locally, make changes, and push:
   ```bash
   git clone https://github.com/iwontgetbanned/artificialsurveillance.com.git
   cd artificialsurveillance.com
   # Make your changes
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

2. **Update the server**:
   ```bash
   # SSH into your EC2 instance
   ssh -i your-key.pem ubuntu@your-ec2-ip

   # Navigate to project directory
   cd ~/artificialsurveillance.com

   # Pull latest changes
   git pull origin main

   # Rebuild and restart Docker container
   docker-compose -f docker-compose.ssl.yml down
   docker-compose -f docker-compose.ssl.yml build --no-cache
   docker-compose -f docker-compose.ssl.yml up -d

   # Verify update
   docker ps
   ```

### Method 2: Automated Update Script

Create an update script for easier deployments:

```bash
# Create update script
nano ~/update-website.sh

# Add this content:
#!/bin/bash
echo "🔄 Updating Artificial Surveillance website..."
cd /home/ubuntu/artificialsurveillance.com
git pull origin main
docker-compose -f docker-compose.ssl.yml down
docker-compose -f docker-compose.ssl.yml build --no-cache
docker-compose -f docker-compose.ssl.yml up -d
echo "✅ Update completed at $(date)"
docker ps

# Make executable
chmod +x ~/update-website.sh

# To update in the future, just run:
./update-website.sh
```

### Types of Changes You Can Make

1. **Content Updates**:
   - Edit React components in `src/` folder
   - Update images in `src/assets/` folder
   - Modify text, links, contact information

2. **Styling Changes**:
   - Update `src/App.css` for styles
   - Modify Tailwind classes in components
   - Change colors, fonts, layouts

3. **Configuration Updates**:
   - Update `package.json` for dependencies
   - Modify build settings in `vite.config.ts`
   - Change nginx configuration in `nginx.ssl.conf`

4. **New Features**:
   - Add new React components
   - Create new pages/routes
   - Add new functionality

---

## Troubleshooting

### Common Issues

**Container won't start**:
```bash
docker-compose -f docker-compose.ssl.yml logs
docker system prune -f
```

**SSL certificate issues**:
```bash
sudo certbot renew --force-renewal
docker-compose -f docker-compose.ssl.yml restart
```

**Website not loading**:
```bash
# Check if container is running
docker ps

# Check nginx logs
docker-compose -f docker-compose.ssl.yml logs nginx

# Restart container
docker-compose -f docker-compose.ssl.yml restart
```

**Git update issues**:
```bash
# Reset local changes
git reset --hard HEAD
git clean -fd
git pull origin main
```

### Log Locations
- **Container logs**: `docker-compose -f docker-compose.ssl.yml logs`
- **Nginx access logs**: Inside container at `/var/log/nginx/access.log`
- **SSL certificate logs**: `/var/log/letsencrypt/letsencrypt.log`
- **System logs**: `sudo journalctl -f`

---

## Security Best Practices

1. **Keep system updated**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Monitor SSL expiry**:
   ```bash
   sudo certbot certificates
   ```

3. **Regular backups**:
   ```bash
   # Backup website files
   tar -czf backup-$(date +%Y%m%d).tar.gz /home/ubuntu/artificialsurveillance.com

   # Backup SSL certificates
   sudo tar -czf ssl-backup-$(date +%Y%m%d).tar.gz /etc/letsencrypt
   ```

4. **Monitor resources**:
   ```bash
   htop
   df -h
   docker stats
   ```

---

## Quick Reference Commands

### Daily Operations
```bash
# Check website status
curl -I https://artificialsurveillance.com

# View logs
docker-compose -f docker-compose.ssl.yml logs --tail=50

# Update website
cd ~/artificialsurveillance.com && ./update-website.sh

# Check container health
docker ps
```

### Emergency Commands
```bash
# Restart everything
cd ~/artificialsurveillance.com
docker-compose -f docker-compose.ssl.yml restart

# Full rebuild
docker-compose -f docker-compose.ssl.yml down
docker system prune -f
docker-compose -f docker-compose.ssl.yml up --build -d

# Check system resources
htop
df -h
```

---

## Final Checklist

After deployment, verify:
- [ ] Website loads at https://your-domain.com
- [ ] HTTP redirects to HTTPS
- [ ] SSL certificate is valid (A+ rating)
- [ ] Container is running (`docker ps`)
- [ ] Auto-renewal is set up (`sudo crontab -l`)
- [ ] Update script works (`./update-website.sh`)
- [ ] All security headers are present
- [ ] Mobile responsiveness works
- [ ] All pages/routes function correctly

---

## Support Information

**Server Details**:
- OS: Ubuntu 22.04 LTS
- Docker Version: Latest
- SSL Provider: Let's Encrypt
- Web Server: nginx (in container)
- Deployment: Docker Compose

**File Locations**:
- Website code: `/home/ubuntu/artificialsurveillance.com/`
- SSL certificates: `/etc/letsencrypt/live/[domain]/`
- Docker configs: `/home/ubuntu/artificialsurveillance.com/docker-compose.ssl.yml`
- Update script: `/home/ubuntu/update-website.sh`

**Key URLs**:
- Website: https://artificialsurveillance.com
- SSL Test: https://www.ssllabs.com/ssltest/
- Repository: https://github.com/iwontgetbanned/artificialsurveillance.com
