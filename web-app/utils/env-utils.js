import Cookies from 'universal-cookie'

const cookies = new Cookies()

function inDevelopment() {
  return process.env.MODE === 'development'
}

function createUserId() {
  return (
    `${Math.random()
      .toString(36)
      .slice(2)}_` +
    `${Math.random()
      .toString(36)
      .slice(2)}`
  )
}

function getUserId() {
  return cookies.get('user_id')
}

function setUserId(userId) {
  const twoYears = 63072000
  cookies.set('user_id', userId, { maxAge: twoYears })
}

export default {
  inDevelopment,
  createUserId,
  getUserId,
  setUserId
}
