module.exports = {
  bot: {
    name: 'Bot Clover',
    ownerName: 'Owner Clover',
    ownerNumber: [process.env.OWNER_NUMBER || '628xxxxxxxxxx'],
    version: '1.0.0'
  },

  mode: {
    public: true,
    respondGroup: true,
    respondPrivate: true
  },

  command: {
    prefix: '!',
    ignoreCase: true
  },

  message: {
    wait: '⏳ Tunggu sebentar...',
    error: '⚠️ Terjadi kesalahan.',
    notFound: '❌ Command tidak ditemukan.',
    ownerOnly: '❌ Command ini khusus owner.',
    groupOnly: '❌ Command ini hanya bisa di grup.'
  },

  api: {
    timeout: 10000
  },

  log: {
    showCommand: true,
    showError: true
  }
}
