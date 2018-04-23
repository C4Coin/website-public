function formatReadTime(readTime) {
  const readTimeUnit = readTime < 60 ? 'min' : 'hr'
  const timeEstimation =
    readTime < 60 ? readTime : parseFloat((readTime / 60).toFixed(1))
  return `${timeEstimation} ${readTimeUnit} read`
}

function formatDate(date) {
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  return date.toLocaleString('en-US', dateOptions)
}

export default {
  formatReadTime,
  formatDate
}
