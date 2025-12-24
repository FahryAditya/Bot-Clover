// animeWaifu.js
const axios = require('axios')

// Fungsi mengambil waifu random atau berdasarkan query
module.exports = {
  // !cariwaifu <nama>
  cariwaifu: async (sock, msg, args) => {
    if (!args[0]) return sock.sendMessage(msg.key.remoteJid, { text: 'Masukkan nama waifu yang ingin dicari.' })
    try {
      const query = args.join(' ')
      // Pakai API Waifu.pics / Waifu API lain yang sesuai
      const res = await axios.get(`https://api.waifu.pics/sfw/waifu`) // untuk demo random
      const imageUrl = res.data.url
      await sock.sendMessage(msg.key.remoteJid, {
        image: { url: imageUrl },
        caption: `Hasil pencarian waifu: ${query}`
      })
    } catch (err) {
      await sock.sendMessage(msg.key.remoteJid, { text: '⚠️ Terjadi kesalahan saat mencari waifu.' })
    }
  },

  // !randomwaifu
  randomwaifu: async (sock, msg, args) => {
    try {
      const res = await axios.get('https://api.waifu.pics/sfw/waifu')
      const imageUrl = res.data.url
      await sock.sendMessage(msg.key.remoteJid, {
        image: { url: imageUrl },
        caption: 'Ini waifu random untukmu!'
      })
    } catch (err) {
      await sock.sendMessage(msg.key.remoteJid, { text: '⚠️ Terjadi kesalahan saat mengambil waifu random.' })
    }
  }
}
