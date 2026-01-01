#!/bin/sh
set -e

# Start Astro SSR
node /app/dist/server/entry.mjs &

# Wait for Node
for i in $(seq 1 10); do
  nc -z 127.0.0.1 4321 && break
  sleep 0.5
done

# Start nginx in foreground
nginx -g "daemon off;"