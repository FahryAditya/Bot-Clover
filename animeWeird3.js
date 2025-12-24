// animeWeird3.js

module.exports = {
  // 1️⃣ !animerandomquote – Quote absurd dari karakter anime random
  async animerandomquote() {
    const quotes = [
      'Naruto: "Aku ingin menjadi Hokage… tapi besok saja."',
      'Goku: "Aku lapar, mari makan ramen sebelum bertarung."',
      'Luffy: "Buah Iblis membuatku konyol, tapi aku senang."',
      'Shinchan: "Mainan dan makanan, dua hal penting hari ini!"',
      'Sakura: "Aku bisa menendang kamu dari jarak 10 meter."'
    ]
    return quotes[Math.floor(Math.random() * quotes.length)]
  },

  // 2️⃣ !animefood – Karakter anime dan makanan absurd favorit mereka
  async animefood() {
    const foods = [
      'Naruto suka makan ramen sambil terbang.',
      'Goku memakan 100 buah sekaligus sebelum bertarung.',
      'Luffy lebih memilih daging kambing dari laut.',
      'Shinchan makan kue sambil menari di ruang kelas.',
      'Sakura memasak pancake sambil berlatih ninjutsu.'
    ]
    return foods[Math.floor(Math.random() * foods.length)]
  },

  // 3️⃣ !animepet – Karakter anime berubah jadi hewan lucu secara absurd
  async animepet() {
    const pets = [
      'Naruto menjadi kucing oren yang selalu mengejar bola ramen.',
      'Goku menjadi hamster dan melompat ke atas pohon.',
      'Luffy menjadi anjing laut yang bisa bicara.',
      'Shinchan menjadi burung hantu yang sering menonton TV.',
      'Sakura menjadi kelinci ninja yang bersembunyi di taman.'
    ]
    return pets[Math.floor(Math.random() * pets.length)]
  }
}
