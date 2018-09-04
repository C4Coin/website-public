function shortDate(date) {
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  return date.toLocaleString('en-US', dateOptions)
}

function longDate(date) {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return date.toLocaleString('en-US', dateOptions)
}

export default {
  shortDate,
  longDate
}
