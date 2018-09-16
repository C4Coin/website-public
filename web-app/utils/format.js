import qs from 'qs'

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

// Generated a query string from an object
function queryString(obj) {
  const keys = Object.keys(obj)
  // Remove keys with an empty value pair
  const formattedObj = keys.reduce((accumulator, key) => {
    if (obj[key]) {
      return { ...accumulator, [key]: obj[key] }
    }
    return { ...accumulator }
  })
  return qs.stringify(formattedObj)
}

export default {
  shortDate,
  longDate
}
