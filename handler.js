const commands = require('./commands')
const config = require('./config')
const { logCmd, logError } = require('./logger')

module.exports = async (sock, msg) => {
  try {
    if (!msg.message) return

    const from = msg.key.remoteJid
    const isGroup = from.endsWith('@g.us')

    // ===== AMBIL SEMUA TEKS =====
    const body =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      msg.message.imageMessage?.caption ||
      msg.message.videoMessage?.caption ||
      msg.message.documentMessage?.caption ||
      ''

    if (!body) return

    const prefix = config.prefix  // sesuaikan dengan config.js terbaru
    if (!body.startsWith(prefix)) return

    const args = body
      .slice(prefix.length)
      .trim()
      .split(/\s+/)

    const commandName = args.shift().toLowerCase()

    logCmd(commandName, from)

    // ===== AMBIL COMMAND DARI OBJECT =====
    const command = commands[commandName]

    if (!command) {
      return sock.sendMessage(from, {
        text: config.message.notFound
      })
    }

    // ===== MODE CHECK =====
    if (isGroup && !config.mode.respondGroup) return
    if (!isGroup && !config.mode.respondPrivate) return

    // ===== FUNCTION REPLY =====
    const reply = (text) => sock.sendMessage(from, { text }, { quoted: msg })

    // ===== JALANKAN COMMAND =====
    await command(sock, msg, args)

  } catch (err) {
    logError(err.stack || err.message)
  }
}
