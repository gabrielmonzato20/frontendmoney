# Stage 1: Build the Angular application
FROM node:16.14.0-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve the built Angular app using the Angular development server
FROM node:16.14.0-alpine

WORKDIR /app

COPY --from=build /app/dist/frontend/ .

# Expose port 4200
EXPOSE 4200

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
