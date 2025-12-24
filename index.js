const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys')

const Pino = require('pino')
const qrcode = require('qrcode-terminal')

const handler = require('./handler')
const { logInfo, logError } = require('./logger')

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth')

  const sock = makeWASocket({
    auth: state,
    logger: Pino({ level: 'silent' })
  })

  // simpan session
  sock.ev.on('creds.update', saveCreds)

  // koneksi & QR
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update

    if (qr) {
      console.log('\nScan QR untuk login:\n')
      qrcode.generate(qr, { small: true })
    }

    if (connection === 'open') {
      logInfo('Bot Clover berhasil terhubung')
    }

    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode
      if (reason !== DisconnectReason.loggedOut) {
        logError('Koneksi terputus, mencoba reconnect...')
        startBot()
      } else {
        logError('Logout terdeteksi. Hapus folder auth untuk login ulang.')
      }
    }
  })

  // pesan masuk → handler
  sock.ev.on('messages.upsert', async ({ messages }) => {
    if (!messages || !messages[0]) return
    try {
      await handler(sock, messages[0])
    } catch (err) {
      logError(err.message)
    }
  })
}

startBot()
