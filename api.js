const axios = require('axios')

const client = axios.create({
  timeout: 10000,
  headers: {
    'User-Agent': 'CloverAnimeBot/1.0'
  }
})

module.exports = {

  // ======================
  // JIKAN (MyAnimeList)
  // ======================
  async animeInfoJikan(title) {
    try {
      const res = await client.get(
        'https://api.jikan.moe/v4/anime',
        { params: { q: title, limit: 1 } }
      )

      if (!res.data.data.length) return null
      const a = res.data.data[0]

      return {
        source: 'Jikan',
        title: a.title,
        score: a.score || 'N/A',
        episodes: a.episodes || 'N/A',
        status: a.status,
        synopsis: a.synopsis || 'Tidak ada deskripsi'
      }
    } catch {
      return null
    }
  },

  // ======================
  // KITSU API
  // ======================
  async animeInfoKitsu(title) {
    try {
      const res = await client.get(
        'https://kitsu.io/api/edge/anime',
        { params: { 'filter[text]': title, 'page[limit]': 1 } }
      )

      if (!res.data.data.length) return null
      const a = res.data.data[0].attributes

      return {
        source: 'Kitsu',
        title: a.canonicalTitle,
        score: a.averageRating || 'N/A',
        episodes: a.episodeCount || 'N/A',
        status: a.status,
        synopsis: a.synopsis || 'Tidak ada deskripsi'
      }
    } catch {
      return null
    }
  },

  // ======================
  // AUTO INFO (JIKAN → KITSU)
  // ======================
  async animeInfo(title) {
    return (
      await this.animeInfoJikan(title) ||
      await this.animeInfoKitsu(title)
    )
  },

  // ======================
  // ANIME QUOTES
  // ======================
  async animeQuote() {
    try {
      const res = await client.get(
        'https://animechan.xyz/api/random'
      )

      return {
        quote: res.data.quote,
        character: res.data.character,
        anime: res.data.anime
      }
    } catch {
      return null
    }
  }
}
