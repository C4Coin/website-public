function acronymize(title) {
  return title
    .trim()
    .split(' ')
    .reduce((acronym, word) => acronym + word[0], '')
}

function surName(fullName) {
  return fullName
    .trim()
    .split(' ')
    .slice(-1)[0]
}

function givenName(fullName) {
  return fullName
    .trim()
    .split(' ')
    .slice(0, -1)
    .join(' ')
}

export default {
  acronymize,
  surName,
  givenName
}
