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
  const cmIdValuePairs = Object.values(fields).reduce(
    (pairs, field) => ({ ...pairs, [field.cmId]: field.value }),
    {}
  )
  const data = qs.stringify(cmIdValuePairs)

  return axios.post(token, data, config)
}

function subscribe(formId, fields) {
  if (!fields['email']) {
    return Promise.reject(
      new Error(`An "email" field is required to subscribe`)
    )
  }
  return requestToken(formId, fields['email'].value).then(response => {
    if (response.status !== 200) {
      return Promise.reject(
        new Error(`Response ${response.status}: Token endpoint request failed`)
      )
    }
    // Response data is token
    return sendData(response.data, fields)
  })
}

export default {
  requestToken,
  sendData,
  subscribe
}
