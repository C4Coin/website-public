import React from 'react'
import STATUS from './status'

const OauthContext = React.createContext({
  token: '',
  validationStatus: STATUS.UNAVAILABLE
})

export default OauthContext
