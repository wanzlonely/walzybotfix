WalzyFixRed Samurai — PREMIUM Build
==================================

What's added in this premium build:
- Group verification middleware (users must join REQUIRED_GROUP_ID to use the bot)
- PM2 ecosystem config for process management (ecosystem.config.js)
- Pterodactyl startup example (pterodactyl_startup.sh) and egg example (pterodactyl.egg.json)
- Termux start script (start-termux.sh) and banner (banner.txt)
- .env.example updated with REQUIRED_GROUP_ID and USE_PM2 placeholders

REQUIRED ENV VARS:
- TELEGRAM_BOT_TOKEN=your_bot_token
- REQUIRED_GROUP_ID=-1003325663954
- WHATSAPP_SESSION= (if used)

PTERODACTYL DEPLOY:
1. Create a Node.js server on Pterodactyl.
2. Upload repository files or git clone into server.
3. Use startup command: bash pterodactyl_startup.sh
4. Set env vars in the panel: TELEGRAM_BOT_TOKEN, REQUIRED_GROUP_ID, WHATSAPP_SESSION

GROUP VERIFICATION:
- The middleware uses bot.telegram.getChatMember(REQUIRED_GROUP_ID, userId).
- The bot must be present in that group and have permission to view members.
- If verification fails, user receives an instructive message and access is denied.

If automatic injection into your bot file failed, look for a comment in your bot entry file instructing manual setup.

