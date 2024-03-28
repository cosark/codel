# Use the Node.js 18 Alpine image as the base for the build stage
FROM node:18-alpine
# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the 'package.json', 'yarn.lock' and all other necessary files to the container
COPY package.json yarn.lock .

# Optionally, if you have other configuration files or directories, copy them as well
# COPY ./client/other-configs ./other-configs

# Install the project dependencies using Yarn
RUN yarn install

# Copy the rest of your client's source code into the container
COPY . .

# Build the project using Yarn
RUN yarn run dev
