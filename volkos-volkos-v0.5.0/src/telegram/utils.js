// -- escapeMarkdown --
export const escapeMarkdown = (text) => {
  return text
    .replace(/[_*[\]()~`>#+\-.!]/g, '\\$&')
    .replace(/\n/g, '\n');
};

// -- format📊 Status SistemMessage --
export const format📊 Status SistemMessage = (status) => {
  const telegram📊 Status Sistem = status.telegram ? '✅' : '❌';
  const whatsapp📊 Status Sistem = status.whatsapp ? '✅' : '❌';
  const paired = status.paired ? '✅' : '❌';

  let message = '*📊 Status Sistem Bot*\n\n';
  message += `Telegram: ${telegram📊 Status Sistem}\n`;
  message += `WhatsApp: ${whatsapp📊 Status Sistem}\n`;
  message += `Paired: ${paired}`;

  if (status.phoneNumber) {
    message += `\nNomor: ${status.phoneNumber}`;
  }

  return message;
};

// -- formatErrorMessage --
export const formatErrorMessage = (error) => {
  let message = 'Terjadi error';
  if (error) {
    if (typeof error === 'string') {
      message = error;
    } else if (error.message) {
      message = error.message;
    } else if (error.toString) {
      message = error.toString();
    }
  }
  return `❌ *Error*\n\n${escapeMarkdown(message)}`;
};

// -- formatPairingMessage --
export const formatPairingMessage = (code, phone) => {
  let message = '🤖 *VOLKSBOT PAIRING*\n\n';
  message += `📱 Nomor: ${phone}\n\n`;
  message += '🔐 *Kode Lo:*\n';
  message += `*${code}*\n\n`;
  message += '─────────────────────\n\n';
  message += '📖 *Langkah:*\n';
  message += '1️⃣ Buka WhatsApp di HP\n';
  message += '2️⃣ Settings → Linked Devices\n';
  message += '3️⃣ Tap "Link a Device"\n';
  message += '4️⃣ Masukin kode di atas\n';
  message += '5️⃣ Tunggu konfirmasi koneksi\n\n';
  message += '⏳ Jangan lanjut sampe bot nunjukin "✅ VOLKSBOT Connected!"';

  return message;
};

// -- isAdminUser --
export const isAdminUser = (userId, adminId) => {
  return userId === adminId;
};
