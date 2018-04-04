import axios from 'axios'
import appConfig from 'app.config.js'
import qs from 'qs'

const { url, u, id } = appConfig.mailchimp

const subscribeUrl = `${url}?${qs.stringify({ u, id })}`
const fields = {
  email: 'EMAIL',
  firstName: 'FNAME',
  lastName: 'LNAME'
}

export default {
  subscribeUrl,
  email
}
