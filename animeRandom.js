const axios = require('axios')

const JIKAN = 'https://api.jikan.moe/v4'

module.exports = {
  async randomAnime() {
    try {
      const res = await axios.get(`${JIKAN}/random/anime`)
      const anime = res.data.data

      if (!anime) return 'Anime tidak ditemukan.'

      return `🎲 Random Anime

Judul: ${anime.title}
Score: ${anime.score || 'N/A'}
Episode: ${anime.episodes || 'N/A'}
Status: ${anime.status || 'N/A'}

${anime.synopsis
  ? anime.synopsis.slice(0, 300) + '...'
  : 'Tidak ada sinopsis.'}`

    } catch (err) {
      return 'Gagal mengambil data random anime.'
    }
  }
}
