# Use the official Go image as a builder stage to compile your application
FROM golang:latest AS builder

# Set the working directory
WORKDIR /app

# Copy the local package files to the container's workspace
COPY go.mod ./
COPY go.sum ./

# Download all dependencies
RUN go mod download

# Copy the rest of the code from the current directory to the working directory inside the container
COPY . .

# Build the application to /app/main.
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/main .

# Use a small image to run the compiled application
FROM alpine:latest

# Copy the binary from the builder stage to the production image
COPY --from=builder /app/main .

# This is the runtime command for the container
CMD ["./main"]