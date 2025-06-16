#!/bin/bash

# Automated Website Update Script
# Updates the Artificial Surveillance website from GitHub

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔄 Updating Artificial Surveillance website...${NC}"
echo "================================================="

# Record start time
START_TIME=$(date)

# Navigate to project directory
cd /home/ubuntu/artificialsurveillance.com

# Check current status
echo -e "${BLUE}📊 Current Status:${NC}"
echo "Current branch: $(git branch --show-current)"
echo "Last commit: $(git log -1 --pretty=format:'%h - %s (%cr)')"
echo ""

# Fetch latest changes
echo -e "${BLUE}🔍 Checking for updates...${NC}"
git fetch origin main

# Check if there are updates
if git status -uno | grep -q "Your branch is behind"; then
    echo -e "${YELLOW}📥 Updates found! Pulling latest changes...${NC}"

    # Pull latest changes
    git pull origin main

    echo -e "${BLUE}🛑 Stopping current container...${NC}"
    docker-compose -f docker-compose.ssl.yml down

    echo -e "${BLUE}🔨 Building updated container...${NC}"
    docker-compose -f docker-compose.ssl.yml build --no-cache

    echo -e "${BLUE}🚀 Starting updated container...${NC}"
    docker-compose -f docker-compose.ssl.yml up -d

    # Wait for container to start
    echo -e "${BLUE}⏳ Waiting for container to start...${NC}"
    sleep 10

    # Verify container is running
    if docker ps | grep -q artificialsurveillance-web; then
        echo -e "${GREEN}✅ Container started successfully!${NC}"

        # Test website
        echo -e "${BLUE}🧪 Testing website...${NC}"
        if curl -s -o /dev/null -w "%{http_code}" https://artificialsurveillance.com | grep -q "200"; then
            echo -e "${GREEN}✅ Website is responding correctly!${NC}"
        else
            echo -e "${RED}⚠️  Website test failed - check logs${NC}"
        fi

    else
        echo -e "${RED}❌ Container failed to start!${NC}"
        echo "Check logs with: docker-compose -f docker-compose.ssl.yml logs"
        exit 1
    fi

    # Show new commit info
    echo ""
    echo -e "${GREEN}📋 Update Summary:${NC}"
    echo "New commit: $(git log -1 --pretty=format:'%h - %s (%cr)')"

else
    echo -e "${GREEN}✅ No updates available - website is already up to date!${NC}"
fi

# Show final status
echo ""
echo -e "${BLUE}📊 Final Status:${NC}"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -E "(NAMES|artificialsurveillance)"

echo ""
echo -e "${GREEN}✅ Update completed at $(date)${NC}"
echo "Update took: $(date -d "$START_TIME" +'Started at %H:%M:%S') → $(date +'Finished at %H:%M:%S')"
echo ""
echo -e "${BLUE}🌐 Your website: https://artificialsurveillance.com${NC}"
