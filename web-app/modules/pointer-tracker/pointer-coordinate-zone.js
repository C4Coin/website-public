import React from 'react'
import PropTypes from 'prop-types'
import PointerZone from './pointer-zone'

const propTypes = {
  children: PropTypes.func.isRequired
}

class PointerCoordinateZone extends React.Component {
  constructor() {
    super()

    this.state = {
      offsetX: undefined,
      offsetY: undefined,
      width: undefined,
      height: undefined
    }

    this.getRelativePosition = this.getRelativePosition.bind(this)
  }

  getRelativePosition({ offsetX, offsetY, width, height }) {
    this.setState({ offsetX, offsetY, width, height })
  }

  render() {
    const { children } = this.props
    return (
      <PointerZone onPointerMove={this.getRelativePosition}>
        {({ setZone }) => children({ setZone, ...this.state })}
      </PointerZone>
    )
  }
}

PointerCoordinateZone.propTypes = propTypes

export default PointerCoordinateZone
