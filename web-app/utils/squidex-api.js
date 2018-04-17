import axios from 'axios'
import qs from 'qs'

// App config file with API secrets
import appConfig from 'app.config'

const {
  squidex: { appName, clientId, clientSecret, scope }
} = appConfig

const authenticate = function() {
  return axios.post(
    'https://cloud.squidex.io/identity-server/connect/token',
    qs.stringify({
      grant_type: 'client_credentials',
      client_id: `${appName}:${clientId}`,
      client_secret: clientSecret,
      scope: scope
    })
  )
}

const queryData = function(endpoint, options, accessToken) {
  return axios.get(`https://cloud.squidex.io/api/content/c4coin/${endpoint}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`
    },
    ...options
  })
}

const getPosts = queryData.bind(null, 'post', { top: 10 })

export default {
  authenticate,
  queryData,
  getPosts
}
