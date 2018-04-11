import React from 'react'
import PropTypes from 'prop-types'

propTypes = {
  children: PropTypes.func.isRequired
}

class PointerTracker extends React.Component {
  constructor() {
    super()
  }

  captureMouseMovement(event) {
    console.log(event)
  }

  render() {
    return children({
      captureMouseMovement: this.captureMouseMovement
    })
  }
}

PointerTracker.propTypes = propTypes

export default PointerTracker
