// commands.js
const animeInfo = require('./animeinfo')
const animeWeird = require('./animeWeird')
const animeWeird2 = require('./animeWeird2')
const animeWeird3 = require('./animeWeird3')
const animeWaifu = require('./animeWaifu')

// Fitur lama tambahan
// Contoh: ping, menu
const ping = async (sock, msg, args) => {
  await sock.sendMessage(msg.key.remoteJid, { text: 'Pong! 🏓' })
}

const menu = async (sock, msg, args) => {
  const text = `
📖 *Menu Bot Clover*

===== Clover Anime =====
!manga <judul>
!animechar <nama karakter>
!seasonnow
!topanime
!topmanga

===== Fitur Absurd =====
!animememe
!animefact
!animeweirdchar
!guessanime
!animeemoji
!animevs
!animeghost
!animerandomquote
!animefood
!animepet

===== Fitur Waifu =====
!cariwaifu <nama>
!randomwaifu

===== Fitur Lainnya =====
!ping
`
  await sock.sendMessage(msg.key.remoteJid, { text })
}

module.exports = {
  // ===== Fitur Lama =====
  ping,
  menu,

  // ===== Fitur Anime Utama =====
  manga: async (sock, msg, args) => {
    if (!args[0]) return sock.sendMessage(msg.key.remoteJid, { text: 'Masukkan judul manga.' })
    const text = await animeInfo.manga(args.join(' '))
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animechar: async (sock, msg, args) => {
    if (!args[0]) return sock.sendMessage(msg.key.remoteJid, { text: 'Masukkan nama karakter.' })
    const text = await animeInfo.animeChar(args.join(' '))
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  seasonnow: async (sock, msg, args) => {
    const text = await animeInfo.seasonNow()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  topanime: async (sock, msg, args) => {
    const text = await animeInfo.topAnime()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  topmanga: async (sock, msg, args) => {
    const text = await animeInfo.topManga()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  // ===== Fitur Absurd 10 Command =====
  animememe: async (sock, msg, args) => {
    const text = await animeWeird.animememe()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animefact: async (sock, msg, args) => {
    const text = await animeWeird.animefact()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animeweirdchar: async (sock, msg, args) => {
    const text = await animeWeird.animeweirdchar()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  guessanime: async (sock, msg, args) => {
    const text = await animeWeird.guessanime()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animeemoji: async (sock, msg, args) => {
    const text = await animeWeird2.animeemoji()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animevs: async (sock, msg, args) => {
    const text = await animeWeird2.animevs()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animeghost: async (sock, msg, args) => {
    const text = await animeWeird2.animeghost()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animerandomquote: async (sock, msg, args) => {
    const text = await animeWeird3.animerandomquote()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animefood: async (sock, msg, args) => {
    const text = await animeWeird3.animefood()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  animepet: async (sock, msg, args) => {
    const text = await animeWeird3.animepet()
    await sock.sendMessage(msg.key.remoteJid, { text })
  },

  // ===== Fitur Waifu =====
  cariwaifu: async (sock, msg, args) => {
    await animeWaifu.cariwaifu(sock, msg, args)
  },

  randomwaifu: async (sock, msg, args) => {
    await animeWaifu.randomwaifu(sock, msg, args)
  }
}
