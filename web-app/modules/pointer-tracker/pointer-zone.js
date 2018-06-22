import React from 'react'
import PropTypes from 'prop-types'
import PointerContext from './pointer-context'

const propTypes = {
  subscribe: PropTypes.func.isRequired,
  onPointerMove: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
}

class PointerZone extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    // Set to getBoundingClientRect for the element that setZone is attached to
    this.getRect = () => undefined
    this.watchPointer = this.watchPointer.bind(this)
    // subscribe returns a function for unsubscribing
    this.unsubscribe = props.subscribe(this.watchPointer)
    this.setZone = this.setZone.bind(this)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  static shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.subscribe !== this.props.subscribe) {
      this.unsubscribe = nextProps.subscribe(this.watchPointer)
    }

    return true
  }

  watchPointer({ clientX, clientY }) {
    const clientRect = this.getRect()
    if (!clientRect) return

    const {
      x: rectX,
      y: rectY,
      height: rectHeight,
      width: rectWidth
    } = this.getRect()

    // Make sure the pointer is within the horizontal boundaries of the element
    if (clientX < rectX || clientX > rectX + rectWidth) return
    // Make sure the pointer is within the vertical boundaries of the element
    if (clientY < rectY || clientY > rectY + rectHeight) return

    const offsetX = clientX - rectX
    const offsetY = clientY - rectY

    this.props.onPointerMove({ offsetX, offsetY, rectWidth, rectHeight })
  }

  setZone(element) {
    if (!element) return

    this.getRect = () => element.getBoundingClientRect()
  }

  render() {
    const { children } = this.props
    return children({ setZone: this.setZone })
  }
}

PointerZone.propTypes = propTypes

export default function PointerZoneWrapper(props) {
  return (
    <PointerContext.Consumer>
      {({ subscribe }) => <PointerZone {...props} subscribe={subscribe} />}
    </PointerContext.Consumer>
  )
}
