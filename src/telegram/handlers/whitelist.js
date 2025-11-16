// whitelist.js - basic admin commands to manage whitelist in-memory and via file
const fs = require('fs');
const path = require('path');
const WH_FILE = path.join(__dirname, '..', '..', 'whitelist.json');
let whitelist = [];
try { whitelist = JSON.parse(fs.readFileSync(WH_FILE)); } catch(e) { whitelist = []; }
function save() { fs.writeFileSync(WH_FILE, JSON.stringify(whitelist, null, 2)); }
module.exports = (bot) => {
  bot.command('whitelist_add', async (ctx) => {
    const from = ctx.from && ctx.from.id;
    // only allow if user is admin of required group
    try {
      const admin = await bot.telegram.getChatMember(process.env.REQUIRED_GROUP_ID, from);
      if (!admin || !['creator','administrator'].includes(admin.status)) return ctx.reply('⚠️ Kamu bukan admin grup.');
    } catch(e) { return ctx.reply('⚠️ Gagal verifikasi admin.'); }
    const parts = ctx.message.text.split(' ');
    if (parts.length < 2) return ctx.reply('Gunakan: /whitelist_add <userId>');
    const userId = parts[1];
    if (!whitelist.includes(userId)) whitelist.push(userId);
    save();
    ctx.reply('✅ Ditambahkan ke whitelist: ' + userId);
  });
  bot.command('whitelist_list', (ctx) => {
    ctx.reply('Whitelist:\n' + (whitelist.join('\n') || '(kosong)'));
  });
  bot.command('whitelist_remove', (ctx) => {
    const parts = ctx.message.text.split(' ');
    if (parts.length < 2) return ctx.reply('Gunakan: /whitelist_remove <userId>');
    const userId = parts[1];
    whitelist = whitelist.filter(x => x != userId);
    save();
    ctx.reply('✅ Dihapus: ' + userId);
  });
};
