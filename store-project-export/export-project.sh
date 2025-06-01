#!/bin/bash

# Create a new directory for the exported project
EXPORT_DIR="store-project-export"
mkdir -p $EXPORT_DIR

# Copy all project files
cp -r ./* $EXPORT_DIR/

# Remove unnecessary files/directories
cd $EXPORT_DIR
rm -rf node_modules
rm -rf .bolt
rm -rf dist
rm -f package-lock.json

# Create a README file
cat > README.md << 'EOL'
# Store Project

A modern e-commerce store built with React, TypeScript, and Vite.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/context` - React context providers
  - `/types` - TypeScript type definitions
  - `/data` - Data files

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## Requirements

- Node.js 16+
- npm 7+
EOL

# Create a .gitignore file
cat > .gitignore << 'EOL'
# Dependencies
node_modules
.pnp
.pnp.js

# Testing
coverage

# Production
dist
build

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
.env

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
EOL

# Create a zip file
cd ..
zip -r store-project.zip $EXPORT_DIR

echo "Project has been exported to store-project.zip"
echo "To use this project elsewhere:"
echo "1. Unzip store-project.zip"
echo "2. cd store-project-export"
echo "3. npm install"
echo "4. npm run dev" 