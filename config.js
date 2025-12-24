/**
 * CONFIG BOT CLOVER
 * Semua pengaturan bot ada di sini
 * Jangan hardcode di file lain
 */

module.exports = {
  /* ======================
     IDENTITAS BOT
  ====================== */
  bot: {
    name: 'Bot Clover',
    ownerName: 'Owner Clover',
    ownerNumber: ['628xxxxxxxxxx'], // ganti nomor kamu
    version: '1.0.0'
  },

  /* ======================
     MODE BOT
  ====================== */
  mode: {
    public: true,        // true = semua user
    respondGroup: true,  // respon di grup
    respondPrivate: true // respon di chat pribadi
  },

  /* ======================
     COMMAND
  ====================== */
  prefix: '!',         // ✅ langsung bisa dipakai di handler.js
  ignoreCase: true,    // bisa diterapkan di handler kalau mau

  /* ======================
     MESSAGE TEMPLATE
  ====================== */
  message: {
    wait: '⏳ Tunggu sebentar...',
    error: '⚠️ Terjadi kesalahan.',
    notFound: '❌ Command tidak ditemukan.',
    ownerOnly: '❌ Command ini khusus owner.',
    groupOnly: '❌ Command ini hanya bisa di grup.'
  },

  /* ======================
     API CONFIG
  ====================== */
  api: {
    timeout: 10000
  },

  /* ======================
     LOGGING
  ====================== */
  log: {
    showCommand: true,
    showError: true
  }
}
