import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import { withRouter } from 'react-router-dom'

const propTypes = {
  staticContext: PropTypes.any,
  match: ReactRouterPropTypes.match.isRequired
}

export default function withLocationCallback(callback, Component) {
  class AnalyticsConnectedComponent extends React.Component {
    componentDidMount() {
      const { match } = this.props
      callback(match.url)
    }

    render() {
      const { staticContext, ...rest } = this.props
      return <Component {...rest} />
    }
  }

  AnalyticsConnectedComponent.propTypes = propTypes

  return withRouter(AnalyticsConnectedComponent)
}
