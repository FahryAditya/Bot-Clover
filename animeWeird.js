// animeWeird.js
const axios = require('axios')

module.exports = {
  // 1️⃣ !animememe – Mengirim meme anime acak
  async animememe() {
    try {
      // pakai API Tenor/Giphy untuk contoh
      const res = await axios.get('https://api.tenor.com/v1/random', {
        params: {
          q: 'anime meme',
          key: 'LIVDSRZULELA', // contoh key publik Tenor
          limit: 1
        }
      })
      const url = res.data.results[0]?.media[0]?.gif?.url
      return url || 'Gagal mengambil meme anime.'
    } catch (err) {
      return 'Gagal mengambil meme anime.'
    }
  },

  // 2️⃣ !animefact – Fakta lucu / absurd seputar anime
  async animefact() {
    const facts = [
      'Naruto pernah menendang 50 orang dalam satu episode tanpa alasan.',
      'Goku bisa naik tangga tapi lebih suka terbang.',
      'Luffy bisa makan 1000 buah sekaligus, tapi tetap kurus.',
      'Sailor Moon pernah lupa memakai sepatu di misi penyelamatan.',
      'Shinchan suka menari di kamar mandi saat hujan.'
    ]
    return facts[Math.floor(Math.random() * facts.length)]
  },

  // 3️⃣ !animeweirdchar – Karakter anime random + quote absurd
  async animeweirdchar() {
    const chars = [
      { name: 'Naruto', quote: 'Aku akan menjadi Hokage, tapi besok saja.' },
      { name: 'Goku', quote: 'Aku lapar, mari makan ramen sebelum bertarung.' },
      { name: 'Luffy', quote: 'Buah Iblis membuatku konyol, tapi aku senang.' },
      { name: 'Shinchan', quote: 'Mainan dan makanan, dua hal penting hari ini!' },
      { name: 'Sakura', quote: 'Aku bisa menendang kamu dari jarak 10 meter.' }
    ]
    const c = chars[Math.floor(Math.random() * chars.length)]
    return `👤 ${c.name}\nQuote absurd:\n"${c.quote}"`
  },

  // 4️⃣ !guessanime – Tebak anime dari deskripsi absurd
  async guessanime() {
    const games = [
      'Seorang ninja menari di bulan sambil memasak udon.',
      'Seorang bajak laut memakan 100 buah sekaligus dan melompat ke langit.',
      'Gadis penyihir melawan monster sambil menyanyi lagu pop.',
      'Robot raksasa menari balet di kota Tokyo.',
      'Siswa SMA berubah menjadi kucing setiap Selasa.'
    ]
    const g = games[Math.floor(Math.random() * games.length)]
    return `Tebak anime ini:\n"${g}"`
  }
}
