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
    return Promise.reject(err)
  }
  console.warn('queryData options do nothing for the time being')
  return Promise.resolve(data[endpoint])
}

const getArticles = queryData.bind(null, 'article', { top: 10 })

export default {
  authenticate,
  queryData,
  getArticles
}
