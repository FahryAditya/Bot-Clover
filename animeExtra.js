// animeExtra.js
const axios = require('axios')

const JIKAN = 'https://api.jikan.moe/v4'

module.exports = {
  async randomManga() {
    const res = await axios.get(`${JIKAN}/random/manga`)
    const m = res.data.data

    return `🎲 Random Manga
${m.title}
Score: ${m.score}
Chapters: ${m.chapters}
Status: ${m.status}`
  },

  async animeSearch(query) {
    const res = await axios.get(`${JIKAN}/anime`, {
      params: { q: query, limit: 3 }
    })

    if (!res.data.data.length) return null

    return res.data.data
      .map((a, i) =>
        `${i + 1}. ${a.title} (${a.year || 'N/A'}) ⭐ ${a.score}`
      )
      .join('\n')
  },

  async animeAiring(query) {
    const res = await axios.get(`${JIKAN}/anime`, {
      params: { q: query, limit: 1 }
    })
    const a = res.data.data[0]
    if (!a) return null

    return `📡 ${a.title}
Status: ${a.airing ? 'Sedang Tayang' : 'Tidak Tayang'}
Episodes: ${a.episodes || 'N/A'}`
  },

  async animeRating(query) {
    const res = await axios.get(`${JIKAN}/anime`, {
      params: { q: query, limit: 1 }
    })
    const a = res.data.data[0]
    if (!a) return null

    return `⭐ ${a.title}
Score: ${a.score}
Rank: #${a.rank}
Popularity: #${a.popularity}`
  }
}
