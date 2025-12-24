// animeInfo.js
const axios = require('axios')

const JIKAN = 'https://api.jikan.moe/v4'

module.exports = {
  async manga(query) {
    const res = await axios.get(`${JIKAN}/manga`, {
      params: { q: query, limit: 1 }
    })
    const m = res.data.data[0]
    if (!m) return null

    return `📚 ${m.title}
Score: ${m.score}
Status: ${m.status}
Chapters: ${m.chapters}
Synopsis:
${m.synopsis?.slice(0, 300)}...`
  },

  async animeChar(query) {
    const res = await axios.get(`${JIKAN}/characters`, {
      params: { q: query, limit: 1 }
    })
    const c = res.data.data[0]
    if (!c) return null

    return `👤 ${c.name}
Favorites: ${c.favorites}
About:
${c.about?.slice(0, 300)}...`
  },

  async seasonNow() {
    const res = await axios.get(`${JIKAN}/seasons/now`)
    return res.data.data
      .slice(0, 5)
      .map((a, i) => `${i + 1}. ${a.title} ⭐ ${a.score}`)
      .join('\n')
  },

  async topAnime() {
    const res = await axios.get(`${JIKAN}/top/anime`)
    return res.data.data
      .slice(0, 5)
      .map((a, i) => `${i + 1}. ${a.title} ⭐ ${a.score}`)
      .join('\n')
  },

  async topManga() {
    const res = await axios.get(`${JIKAN}/top/manga`)
    return res.data.data
      .slice(0, 5)
      .map((m, i) => `${i + 1}. ${m.title} ⭐ ${m.score}`)
      .join('\n')
  }
}
