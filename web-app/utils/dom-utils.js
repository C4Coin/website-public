function createElementId() {
  return Math.random()
    .toString(36)
    .slice(2)
}

export default {
  createElementId
}
