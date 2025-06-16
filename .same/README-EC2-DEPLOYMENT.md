# 🚀 EC2 Deployment Guide for Artificial Surveillance Website

This guide provides multiple ways to deploy the Artificial Surveillance website on AWS EC2.

## 📋 Prerequisites

1. **AWS EC2 Instance**: Ubuntu 22.04 LTS (t3.small or larger recommended)
2. **Security Groups**: Allow inbound traffic on ports 22 (SSH), 80 (HTTP), and 443 (HTTPS)
3. **Key Pair**: For SSH access to your instance
4. **Domain Name** (optional): Point your domain's A record to your EC2 public IP

## 🎯 Quick Start (Recommended)

### Option 1: One-Line Deployment

Connect to your EC2 instance and run:

```bash
# SSH into your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Run the automated deployment script
curl -sSL https://raw.githubusercontent.com/iwontgetbanned/artificialsurveillance.com/main/scripts/ec2-deploy.sh | bash
```

This will:
- Install all dependencies (Node.js, nginx, git)
- Clone and build the website
- Configure nginx with optimal settings
- Set up firewall rules
- Create an update script for future deployments

### Option 2: Docker Deployment

If you prefer Docker:

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Clone and deploy
git clone https://github.com/iwontgetbanned/artificialsurveillance.com.git
cd artificialsurveillance.com
docker-compose up -d
```

## 🔒 SSL/HTTPS Setup

After your site is running, secure it with SSL:

```bash
# Make the SSL script executable and run it
chmod +x scripts/setup-ssl.sh
./scripts/setup-ssl.sh your-domain.com
```

## 📁 Project Structure

```
artificialsurveillance.com/
├── src/                    # React source code
├── public/                 # Static assets
├── scripts/
│   ├── ec2-deploy.sh      # Main deployment script
│   └── setup-ssl.sh       # SSL setup script
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
├── nginx.docker.conf      # Nginx config for Docker
├── netlify.toml          # Original Netlify config
└── .same/                # Deployment documentation
```

## 🔧 Manual Deployment Steps

If you prefer to deploy manually:

### 1. System Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install nginx and git
sudo apt install nginx git -y
```

### 2. Application Setup

```bash
# Clone repository
git clone https://github.com/iwontgetbanned/artificialsurveillance.com.git
cd artificialsurveillance.com

# Install dependencies and build
npm install
npm run build

# Deploy to nginx
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html
```

### 3. Nginx Configuration

```bash
# Create nginx config
sudo nano /etc/nginx/sites-available/artificialsurveillance

# Add the configuration (see ec2-deploy.sh for full config)
# Enable site
sudo ln -s /etc/nginx/sites-available/artificialsurveillance /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test and start nginx
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 4. Firewall Setup

```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

## 🔄 Updating the Website

### Automated Updates

Use the generated update script:

```bash
./update-site.sh
```

### Manual Updates

```bash
cd /home/ubuntu/artificialsurveillance.com
git pull origin main
npm install
npm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl reload nginx
```

### Docker Updates

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 📊 Monitoring and Maintenance

### Check Site Status

```bash
# Check nginx status
sudo systemctl status nginx

# View logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Check disk space
df -h

# Monitor resources
htop
```

### SSL Certificate Monitoring

```bash
# Check certificate expiry
sudo certbot certificates

# Test renewal
sudo certbot renew --dry-run

# Check auto-renewal timer
sudo systemctl status certbot.timer
```

## 🛡️ Security Best Practices

1. **Keep System Updated**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Install Fail2Ban**
   ```bash
   sudo apt install fail2ban -y
   ```

3. **Disable Password Authentication**
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Set: PasswordAuthentication no
   sudo systemctl restart ssh
   ```

4. **Regular Backups**
   ```bash
   # Backup website files
   tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/html

   # Backup nginx config
   sudo cp -r /etc/nginx/sites-available /home/ubuntu/nginx-backup
   ```

## 🎛️ Environment-Specific Configurations

### Development
- Use the built-in Vite dev server: `npm run dev`
- Access via `http://your-ec2-ip:5173`

### Staging
- Deploy to a subdomain: `staging.yourdomain.com`
- Use basic auth for access control

### Production
- Use SSL/HTTPS
- Enable gzip compression
- Set up monitoring and alerts
- Configure CDN (CloudFront)

## 📈 Performance Optimization

### Nginx Optimizations

```nginx
# Add to nginx config
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/css application/javascript application/json image/svg+xml;

# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### AWS Optimizations

1. **Use CloudFront CDN**
2. **Enable Auto Scaling** (if needed)
3. **Set up ELB** for multiple instances
4. **Use Route 53** for DNS management

## 🚨 Troubleshooting

### Common Issues

1. **502 Bad Gateway**
   ```bash
   sudo systemctl restart nginx
   sudo systemctl status nginx
   ```

2. **Permission Denied**
   ```bash
   sudo chown -R www-data:www-data /var/www/html
   sudo chmod -R 755 /var/www/html
   ```

3. **SSL Certificate Issues**
   ```bash
   sudo certbot renew --force-renewal
   sudo systemctl reload nginx
   ```

4. **Node.js Build Failures**
   ```bash
   # Clear npm cache
   npm cache clean --force

   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

### Getting Help

- Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Check system logs: `sudo journalctl -u nginx -f`
- Monitor system resources: `htop`
- Test nginx config: `sudo nginx -t`

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review the logs for error messages
3. Ensure all prerequisites are met
4. Verify DNS settings if using a custom domain

## 🎉 Success!

Once deployed, your Artificial Surveillance website will be available at:

- **HTTP**: `http://your-ec2-public-ip`
- **HTTPS**: `https://your-domain.com` (after SSL setup)

The site features:
- ⚡ Lightning-fast performance
- 📱 Mobile-responsive design
- 🔒 Security headers and SSL
- 🎨 Modern React UI with animations
- 📊 Analytics-ready structure

Enjoy your new deployment! 🚀
