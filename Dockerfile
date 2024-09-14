# Base image
FROM node:18 AS build

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage for production
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port (hier: 80, kann angepasst werden)
EXPOSE 80

# Nginx default command
CMD ["nginx", "-g", "daemon off;"]
