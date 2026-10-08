
export const isYoutube = (item) => Boolean(item.youtubeId)

export const getThumbnail = (item) =>
  item.image ||
  (item.youtubeId ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg` : null)

export const getYoutubeEmbedUrl = (youtubeId) =>
  `https://www.youtube.com/embed/${youtubeId}?autoplay=1`


export const wrapIndex = (index, length) => (index + length) % length