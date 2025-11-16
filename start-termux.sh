#!/data/data/com.termux/files/usr/bin/bash
echo "WalzyFixRed Samurai — Premium Auto Starter"
pkg update -y
pkg install nodejs git -y
npm install
if [ ! -f .env ]; then
  cp .env.example .env
  echo "REQUIRED_GROUP_ID=-1003325663954" >> .env
fi
# optional PM2 install
if [ "$1" = "pm2" ]; then
  npm install -g pm2
  pm2 start ecosystem.config.js
  pm2 save
  exit 0
fi
node src/index.js || node src/telegram/bot.js || node .
