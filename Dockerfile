# Use the official Golang image as the base image
FROM golang:1.20.3-alpine3.16

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the source code into the container
COPY . .

# Copy the entrypoint script into the container and set its permissions
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Download Go dependencies
RUN go mod tidy

# Build the initial Go app
# RUN go build -o main .

# Expose the port your app will run on
EXPOSE 8080

# Set environment variables and their default values
ENV DB_CONNECTION=postgres \
    DB_HOST=127.0.0.1 \
    DB_PORT=5432 \
    DB_DATABASE=postgres \
    DB_USERNAME=postgres \
    DB_PASSWORD=postgres \
    DB_DEBUG=false \
    APP_NAME=LAMBDA \
    APP_PORT=8080 \
    APP_MIGRATE=true \
    APP_SEED=true \
    SYSADMIN_LOGIN=superadmin \
    SYSADMIN_PASSWORD=superadmin \
    SYSADMIN_EMAIL=null \
    JWT_SECRET=BIzaSyBUEDlwdKQ0AZOnHOkZv2MIw0GlRjql6V4 \
    JWT_TTL=72 \
    MAIL_MAILER=smtp \
    MAIL_HOST=smtp.gmail.com \
    MAIL_PORT=587 \
    MAIL_USERNAME=null \
    MAIL_PASSWORD=null \
    MAIL_ENCRYPTION=tls \
    MAIL_FROM_ADDRESS=null \
    MAIL_FROM_NAME=LAMBDA \
    GRAPHQL_DEBUG=true \
    LAMBDA_ROOT="./node_modules/@lambda-platform/lambda-builder"

# Set the entrypoint script as the entrypoint
CMD ["sh", "./start.sh"]
