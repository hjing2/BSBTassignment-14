# Use the official Node.js image as the base image
FROM node:14-alpine as build

# Set the working directory
WORKDIR /haodan_jing_portfolio_site

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use Nginx to serve the build
FROM nginx:alpine

# Copy the build output to Nginx's html directory
COPY --from=build /haodan_jing_portfolio_site/build /usr/share/nginx/html

# Expose port 5575
EXPOSE 5575

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
