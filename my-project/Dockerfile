FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally for hot-reloading
RUN npm install -g nodemon

# Copy the rest of the application
COPY . .

# Expose Strapi port
EXPOSE 1337

# Run in development mode with hot-reloading
CMD ["npm", "run", "develop"]
