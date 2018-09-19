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
  // Remove keys with an empty value pair
  const formattedObj = Object.keys(obj).reduce((nonempty, key) => {
    if (obj[key]) {
      return { ...nonempty, [key]: obj[key] }
    }
    return { ...nonempty }
  }, {})
  return qs.stringify(formattedObj)
}

function objectMap(obj, callback) {
  return Object.keys(obj).reduce(
    (mapped, key, index, array) => ({
      ...mapped,
      ...callback(key, obj[key], index, obj)
    }),
    {}
  )
}

export default {
  shortDate,
  longDate,
  queryString,
  objectMap
}
