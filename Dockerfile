# Use the official Golang image as the base image
FROM golang:1.20.3-alpine3.16 as base
WORKDIR /app
COPY . .
RUN chmod 700 /app/public/uploaded
RUN go mod tidy
RUN go build -o main .


# Define the final image for development
FROM base as dev
WORKDIR /app
COPY --from=base /app/ /app/
COPY --from=base /app/start.sh /app/start.sh
RUN chmod +x /app/start.sh
RUN chmod +x /app/main
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
CMD ["sh", "./start.sh"]

# Define the final image for production
FROM alpine:3.16 as prod
WORKDIR /app
COPY --from=base /app/main /app/main
COPY --from=base /app/lambda.json /app/lambda.json
COPY --from=base /app/public/ /app/public/
COPY --from=base /app/views/ /app/views/
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
CMD ["./main"]
