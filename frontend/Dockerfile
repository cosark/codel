# Use the Node.js 18 Alpine image as the base for the build stage
FROM node:18-alpine AS web-build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the 'package.json', 'yarn.lock' and all other necessary files to the container
COPY ./client/package.json ./client/yarn.lock ./

# Optionally, if you have other configuration files or directories, copy them as well
# COPY ./client/other-configs ./other-configs

# Install the project dependencies using Yarn
RUN yarn install --cwd client

# Copy the rest of your client's source code into the container
COPY . .

# Build the project using Yarn
RUN yarn --cwd client run build

# Use the official nginx image as the base for the production stage
FROM nginx:latest

# Copy the build output to replace the default nginx contents
COPY --from=web-build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 to the Docker daemon so that it can accept connections
EXPOSE 80

# Start Nginx and ensure it stays in the foreground so the container does not exit
CMD ["nginx", "-g", "daemon off;"]
