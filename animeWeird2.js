// animeWeird2.js

module.exports = {
  // 1️⃣ !animeemoji – Kirim emoji random
  async animeemoji() {
    const emojis = [
      '🍜👘🔥🐱💫',
      '🍣🗡️🌸🌀😎',
      '🍩🎮💥👻🐙',
      '🍱💨👹🎵🛸',
      '🍙⚡🐾🎯🎀'
    ]
    return emojis[Math.floor(Math.random() * emojis.length)]
  },

  // 2️⃣ !animevs – Pertarungan absurd dua karakter
  async animevs() {
    const chars = ['Naruto', 'Luffy', 'Goku', 'Sailor Moon', 'Shinchan', 'Sakura', 'Izuku']
    const a = chars[Math.floor(Math.random() * chars.length)]
    let b
    do {
      b = chars[Math.floor(Math.random() * chars.length)]
    } while (b === a)
    return `⚔️ Pertarungan Absurd:\n${a} VS ${b}\nSiapa yang menang? Jawab absurd saja!`
  },

  // 3️⃣ !animeghost – Cerita horor pendek absurd
  async animeghost() {
    const stories = [
      'Shinchan tersesat di dunia Tokyo Ghoul… dan mulai memasak pancake.',
      'Goku melihat hantu di rumahnya, lalu mengundang mereka bermain bola.',
      'Naruto bertemu zombie tapi memberinya ramen panas.',
      'Sailor Moon dihantui kucing misterius yang bisa berbicara.',
      'Luffy masuk rumah berhantu dan menemukan harta karun ramen.'
    ]
    return stories[Math.floor(Math.random() * stories.length)]
  }
}
