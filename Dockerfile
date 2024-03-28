# Use the Node.js 18 Alpine image as the base for the build stage
FROM node:18-alpine
# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the 'package.json', 'yarn.lock' and all other necessary files to the container
COPY frontend/package.json frontend/yarn.lock .

# Optionally, if you have other configuration files or directories, copy them as well
# COPY ./client/other-configs ./other-configs

# Copy the rest of your client's source code into the container
COPY . .

# Install the project dependencies using Yarn
RUN cd frontend && yarn install

# Build the project using Yarn
CMD ["yarn", "run", "dev", "--cwd", "frontend"]
