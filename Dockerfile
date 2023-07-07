# Stage 1: Build the Angular application
FROM node:14.17.0-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Start Nginx
CMD ["node", "server.ts"]
