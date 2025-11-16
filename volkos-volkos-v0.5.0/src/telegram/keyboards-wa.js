import { Keyboard } from 'grammy';

// -- ownerWAMenu --
export const ownerWAMenu = () => {
  return new Keyboard()
    .text('📱 ⚔️ Pairing Mode')
    .text('❌ ⛔ Putuskan Sesi')
    .row()
    .text('🔍 👁️ Scan Bio')
    .text('📊 📊 Status Sistem')
    .row()
    .text('🔙 Kembali')
    .resized();
};
