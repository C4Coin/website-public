import React from 'react'
import PropTypes from 'prop-types'

import ReactGA from 'react-ga'

export default function withOnclickTracking(Component, event) {
  const ComponentWithTrackedClick = ({ onClick = () => {}, ...rest }) => {
    const trackedClick = () => {
      ReactGA.event(event)
      onClick()
    }
    return <Component onClick={trackedClick} {...rest} />
  }

  ComponentWithTrackedClick.propTypes = {
    onClick: PropTypes.function
  }

  return ComponentWithTrackedClick
}
