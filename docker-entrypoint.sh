#!/bin/sh

# Railway entrypoint script
# Sets environment variables and starts nginx

echo "Starting Employee UI application..."

# If API_URL is set in environment, we can use it
if [ -n "$API_URL" ]; then
  echo "API_URL environment variable is set to: $API_URL"
else
  echo "Warning: API_URL environment variable is not set. Using default: http://localhost:8000"
fi

# Start nginx in foreground
exec nginx -g 'daemon off;'
