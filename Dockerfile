# Stage 1: Build the Angular application
FROM node:14.17.0-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve the built Angular app using a simple HTTP server
FROM nginx:1.21.1-alpine

# Copy the built Angular app files to the nginx default directory
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Copy custom nginx.conf file (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (default for nginx)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
