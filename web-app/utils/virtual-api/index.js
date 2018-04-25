import data from './data'

const authenticate = function() {
  return Promise.resolve({
    data: {
      access_token: 'fake_token'
    }
  })
}

const queryData = function(endpoint, options, accessToken) {
  if (!accessToken) {
    const err =
      '401: Access Fake denied.  Must be authenticated with fake access token to make calls'
    return Promise.reject(new Error(err))
  }
  console.warn('queryData options do nothing for the time being')
  const keys = endpoint.split('/')
  const dataSet = data[keys[0]]
  // If running a general data query
  if (keys.length === 1) return Promise.resolve(dataSet)

  // Get a specific instance
  const itemsList = dataSet['data']['items']
  const item = itemsList.find(element => element.id === keys[1])

  // If it does not exist, console.error
  if (item === undefined) {
    const err = `Item ${keys[1]} not found in ${keys[0]}`
    return Promise.reject(new Error(err))
  }
  return Promise.resolve({ data: item })
}

const getArticles = queryData.bind(null, 'article', { top: 10 })
const getPosts = queryData.bind(null, 'post', { top: 10 })
const getPost = (id, token) => queryData(`post/${id}`, {}, token)

export default {
  authenticate,
  queryData,
  getArticles,
  getPosts,
  getPost
}
