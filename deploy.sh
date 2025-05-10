#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Prepare the dist directory for deployment
echo "Preparing for deployment..."
cd dist

# Create a netlify.toml file in the dist directory
cat > netlify.toml << EOF
# Enable SPA routing for single page applications
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = true
EOF

echo "Deployment files prepared. Now you can manually deploy the 'dist' directory to Netlify."
