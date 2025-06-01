#!/bin/bash

# Set the export directory name and path
EXPORT_DIR="Project Updated"
DOWNLOADS_PATH="/Users/rahul/Downloads/$EXPORT_DIR"

# Create a new directory for the exported project
mkdir -p "$DOWNLOADS_PATH"

# Copy all project files
cp -r ./* "$DOWNLOADS_PATH/"

# Remove unnecessary files/directories
cd "$DOWNLOADS_PATH"
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

echo "Project has been exported to: $DOWNLOADS_PATH"
echo "To use this project:"
echo "1. cd \"$DOWNLOADS_PATH\""
echo "2. npm install"
echo "3. npm run dev" 