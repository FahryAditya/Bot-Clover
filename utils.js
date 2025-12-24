/**
 * UTILITIES BOT CLOVER
 * Fungsi kecil, reusable, dan aman
 */

const config = require('./config')

/* ======================
   TEXT & FORMAT
====================== */

function capitalize(text = '') {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function formatList(arr = []) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return '-'
  }
  return arr.map((v, i) => `${i + 1}. ${v}`).join('\n')
}

function trimText(text = '', max = 500) {
  if (text.length <= max) return text
  return text.slice(0, max) + '...'
}

/* ======================
   VALIDATION
====================== */

function isOwner(number) {
  return config.bot.ownerNumber.includes(number)
}

function isUrl(text = '') {
  return /^https?:\/\/[^\s]+$/i.test(text)
}

/* ======================
   RANDOMIZER
====================== */

function randomItem(arr = []) {
  if (!Array.isArray(arr) || arr.length === 0) return null
  return arr[Math.floor(Math.random() * arr.length)]
}

/* ======================
   TIME
====================== */

function getTime() {
  return new Date().toLocaleString('id-ID')
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/* ======================
   EXPORT
====================== */

module.exports = {
  // text
  capitalize,
  formatList,
  trimText,

  // validation
  isOwner,
  isUrl,

  // random
  randomItem,

  // time
  getTime,
  delay
}
