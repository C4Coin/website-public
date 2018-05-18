import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import appConfig from 'app.config.js'
import envUtils from 'utils/env-utils'
import UserContext from './user-context'

class UserManager extends React.Component {
  constructor() {
    super()

    // Make sure that the user has an ID before starting the app
    let userId = envUtils.getUserId()
    if (!userId) {
      userId = envUtils.createUserId()
      envUtils.setUserId(userId)
    }

    ReactGA.initialize(appConfig.trackingId, {
      debug: envUtils.inDevelopment(),
      gaOptions: {
        userId
      }
    })

    this.state = {
      id: userId
    }
  }

  render() {
    const { id } = this.state
    return <UserContext.Provider value={{ id }} {...this.props} />
  }
}

export default UserManager
