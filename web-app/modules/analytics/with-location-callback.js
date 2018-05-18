import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

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

  return withRouter(AnalyticsConnectedComponent)
}
