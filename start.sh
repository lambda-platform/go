#!/bin/bash

# Check if main exists and is an executable file
if [ -x main ]; then
  # Generate the model files
  ./main generate

fi


# Rebuild the Go app
go build -o main .

# Run the new binary
exec ./main
