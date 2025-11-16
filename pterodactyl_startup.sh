#!/bin/bash
# Pterodactyl startup script example for WalzyFixRed Samurai
# This script runs inside a container/instance managed by Pterodactyl.
cd /home/container
npm install --production
# ensure .env exists
if [ ! -f .env ]; then
  cp .env.example .env
  echo "REQUIRED_GROUP_ID=-1003325663954" >> .env
fi
node src/index.js || node src/telegram/bot.js || node .
