import React from 'react'
import PropTypes from 'prop-types'

import ReactGA from 'react-ga'

export default function withOnclickTracking(Component, event) {
  return function TrackedClickComponent({ onClick, ...rest }) {
    const trackedClick = () => {
      ReactGA.event(event)
      onClick()
    }
    return <Component onClick={trackedClick} {...rest} />
  }
}
