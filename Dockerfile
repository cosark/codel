# Use the Node.js 18 Alpine image as the base for the build stage
FROM node:18-alpine
# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the rest of your client's source code into the container
COPY . .

# Install the project dependencies using Yarn
RUN cd frontend && yarn install

# Build the project using Yarn
CMD ["/bin/sh", "-c", "cd /usr/src/app/frontend && yarn run dev"]
