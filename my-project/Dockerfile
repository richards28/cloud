# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Expose port
EXPOSE 1337

# Start the Strapi server
CMD ["npm", "start"]