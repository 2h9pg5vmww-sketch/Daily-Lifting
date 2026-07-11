#!/bin/bash
cd /workspaces/Daily-Lifting
while true; do
  python3 -m http.server 8000 2>&1 | tee -a /tmp/daily-lifting.log
  echo "Server stopped or crashed at $(date). Restarting in 2 seconds..." >> /tmp/daily-lifting.log
  sleep 2
done
