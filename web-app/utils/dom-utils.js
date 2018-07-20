function createElementId() {
  return Math.random()
    .toString(36)
    .slice(2)
}

function isInternalUrl(url) {
  return (
    !url.startsWith('http') &&
    !url.startsWith('https') &&
    !url.startsWith('mailto:')
  )
}

export default {
  createElementId,
  isInternalUrl
}
