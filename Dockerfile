# Use the official Golang image as the base image
FROM golang:1.22.5-alpine3.20 as base
WORKDIR /app
COPY . .
RUN go mod tidy
RUN go build -o main .


# Define the final image for development
FROM base as dev
WORKDIR /app
COPY --from=base /app/ /app/
COPY --from=base /app/start.sh /app/start.sh
RUN chmod +x /app/start.sh
RUN chmod +x /app/main

CMD ["sh", "./start.sh"]

# Define the final image for production
FROM alpine:3.16 as prod
WORKDIR /app
RUN apk update && apk add --no-cache tzdata
RUN mkdir -p /app/views
RUN mkdir -p /app/public/uploaded
RUN chmod 700 /app/public/uploaded
COPY --from=base /app/main /app/main
COPY --from=base /app/lambda.json /app/lambda.json
COPY --from=base /app/fcm.json /app/fcm.json
COPY --from=base /app/views/ /app/views/

COPY ./app/models/db_schema.json /app/app/models/db_schema.json
COPY ./lambda/*.json /app/lambda/

CMD ["./main"]
