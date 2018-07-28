import axios from 'axios'
import qs from 'qs'

const tokenEndpoint = 'https://createsend.com//t/getsecuresubscribelink'

function requestToken(id, email) {
  const config = {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }
  const data = qs.stringify({
    data: id,
    email
  })

  return axios.post(tokenEndpoint, data, config)
}

function sendData(token, fields = {}) {
  const config = {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }
  const data = qs.stringify(fields)

  return axios.post(token, data, config)
}

function subscribe(id, emailId, fields) {
  return requestToken(id, fields[emailId]).then(response => {
    if (response.status !== 200) {
      return Promise.reject(
        new Error(`Response ${response.status}: Token endpoint request failed`)
      )
    }
    return sendData(response.data, fields)
  })
}

export default {
  requestToken,
  sendData,
  subscribe
}
