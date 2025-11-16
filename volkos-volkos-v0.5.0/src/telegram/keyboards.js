import { Keyboard } from 'grammy';

// -- ownerMainMenu --
export const ownerMainMenu = () => {
  return new Keyboard()
    .text('👥 Lihat User')
    .text('➕ Tambah User')
    .row()
    .text('🔄 Perpanjang User')
    .text('🗑️ Hapus User')
    .row()
    .text('📊 📊 Status Sistem Sistem')
    .text('⚙️ Atur Hari Trial')
    .row()
    .text('📢 Broadcast')
    .text('📱 Menu WA')
    .row()
    .text('📧 Menu Email')
    .text('📄 Convert XLSX')
    .row()
    .text('❓ ❓ Bantuan')
    .text('🔙 🔙 Kembali')
    .row()
    .resized();
};



// -- ownerPanelMenu --
export const ownerPanelMenu = () => {
  return ownerMainMenu();
};

// -- mainAdminMenu --
export const mainAdminMenu = () => {
  return ownerMainMenu();
};

// -- userMainMenu --
export const userMainMenu = () => {
  return new Keyboard()
    .text('📱 ⚔️ Pairing Mode')
    .text('📊 📊 Status Sistem')
    .row()
    .text('🔍 👁️ Scan Bio')
    .text('❌ ⛔ Putuskan Sesi')
    .row()
    .text('📧 📜 Setup Email')
    .text('🔧 🛠️ Perbaiki Nomor')
    .row()
    .text('❓ ❓ Bantuan')
    .text('🔙 🔙 Kembali')
    .resized();
};

// -- addUserRoleKeyboard --
export const addUserRoleKeyboard = () => {
  return new Keyboard()
    .text('👤 Pengguna')
    .text('👑 Pemilik')
    .row()
    .text('🔙 🔙 Kembali')
    .resized();
};

// -- cancelKeyboard --
export const cancelKeyboard = () => {
  return new Keyboard()
    .text('🔙 🔙 Kembali')
    .resized();
};
