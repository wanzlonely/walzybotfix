// verifyGroup.js - middleware to check if user is member of required group
// Usage: const verifyGroup = require('./middleware/verifyGroup')(bot, process.env.REQUIRED_GROUP_ID)
module.exports = (bot, requiredGroupId) => {
  return async (ctx, next) => {
    try {
      const userId = ctx.from && ctx.from.id;
      if (!userId) return ctx.reply("⚠️ Tidak dapat memverifikasi identitasmu.");
      if (!requiredGroupId) return next(); // no group set => allow
      // getChatMember may throw if bot isn't admin or group privacy settings block it
      const member = await bot.telegram.getChatMember(requiredGroupId, userId);
      if (member && member.status && ['creator','administrator','member'].includes(member.status)) {
        return next();
      } else {
        return ctx.reply("⚠️ Akses ditolak. Silakan bergabung dengan grup resmi dahulu:\nhttps://t.me/+3325663954");
      }
    } catch (e) {
      // On error, be safe and deny with instructive message
      console.error('verifyGroup middleware error:', e && e.message);
      return ctx.reply("⚠️ Gagal memverifikasi grup. Pastikan bot sudah berada di grup dan memiliki izin untuk melihat member.");
    }
  };
};
