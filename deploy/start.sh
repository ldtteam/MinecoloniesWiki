#!/bin/sh
set -e

export PORT=4321
export HOST=0.0.0.0
export NODE_ENV=production

echo "[start.sh] Starting Astro SSR..."

# Node logs prefixed and timestamped
node /app/dist/server/entry.mjs 2>&1 | awk '{ print strftime("[%Y-%m-%d %H:%M:%S]"), "[NODE]", $0 }' > /proc/1/fd/1 2>/proc/1/fd/2 &
NODE_PID=$!

echo "[start.sh] Starting Nginx..."

# Nginx logs prefixed and timestamped
nginx -g "daemon off;" 2>&1 | awk '{ print strftime("[%Y-%m-%d %H:%M:%S]"), "[NGINX]", $0 }' &
NGINX_PID=$!

# Function to terminate processes gracefully
cleanup() {
  echo "[start.sh] Cleaning up..."
  kill -TERM $NODE_PID 2>/dev/null || true
  kill -TERM $NGINX_PID 2>/dev/null || true
  wait $NODE_PID 2>/dev/null || true
  wait $NGINX_PID 2>/dev/null || true
  echo "[start.sh] Shutdown complete."
}

trap cleanup INT TERM

# Wait for either process to exit
wait -n $NODE_PID $NGINX_PID

echo "[start.sh] One of the processes exited, shutting down container..."
cleanup
exit 1
