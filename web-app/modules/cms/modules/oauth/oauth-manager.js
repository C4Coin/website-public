import React from 'react'
import PropTypes from 'prop-types'

import squidexApi from 'utils/virtual-api'
import OauthContext from './oauth-context'
import STATUS from './status'

const propTypes = {
  children: PropTypes.node.isRequired
}

class OauthManager extends React.Component {
  constructor() {
    super()

    this.state = {
      token: '',
      validationStatus: STATUS.READY
    }
  }

  componentDidMount() {
    squidexApi
      .authenticate()
      .then(({ data }) => {
        this.setState({
          token: data.access_token,
          validationStatus: STATUS.VALIDATED
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          validationStatus: STATUS.FAILED
        })
      })
  }

  render() {
    const { token, validationStatus } = this.state
    const { children } = this.props
    return (
      <OauthContext.Provider value={{ token, validationStatus }}>
        {children}
      </OauthContext.Provider>
    )
  }
}

OauthManager.propTypes = propTypes

export default OauthManager
