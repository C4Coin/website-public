function createElementId() {
  return Math.random()
    .toString(36)
    .slice(2)
}

function isInternalUrl(url) {
  return !url.startsWith('http') || !url.startsWith('https')
}

export default {
  createElementId,
  isInternalUrl
}
