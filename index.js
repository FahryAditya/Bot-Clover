const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const handler = require('./handler');
const config = require('./config');

const SESSION_FILE = './session.json';

// Load session dari environment variable atau file
if (process.env.WHATSAPP_SESSION) {
  fs.writeFileSync(SESSION_FILE, process.env.WHATSAPP_SESSION);
}

// Gunakan session yang tersimpan
const { state, saveState } = useSingleFileAuthState(SESSION_FILE);

const sock = makeWASocket({
  auth: state,
  printQRInTerminal: false // jangan print otomatis, kita tangani manual
});

// Tangani update koneksi / QR
sock.ev.on('connection.update', (update) => {
  if (update.qr) {
    qrcode.generate(update.qr, { small: true });
    console.log('Scan QR ini dengan WhatsApp kamu.');
  }

  if (update.connection === 'close') {
    console.log('Koneksi terputus, mencoba reconnect...');
  }

  if (update.connection === 'open') {
    console.log('Bot Clover berhasil terhubung');
  }
});

// Simpan session saat update
sock.ev.on('creds.update', saveState);

// Tangani pesan masuk
sock.ev.on('messages.upsert', async ({ messages, type }) => {
  if (type !== 'notify') return;
  for (const msg of messages) {
    if (!msg.key.fromMe) {
      await handler(sock, msg);
    }
  }
});
