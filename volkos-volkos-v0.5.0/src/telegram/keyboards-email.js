import { Keyboard } from 'grammy';

// -- ownerEmailMenu --
export const ownerEmailMenu = () => {
  return new Keyboard()
    .text('📝 Set Template')
    .text('👁️ Lihat Template')
    .row()
    .text('🗑️ Hapus Template')
    .text('📧 📜 Setup Email')
    .row()
    .text('🔧 🛠️ Perbaiki Nomor')
    .text('🔙 Kembali')
    .resized();
};
