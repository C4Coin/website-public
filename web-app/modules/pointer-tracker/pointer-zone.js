import React from 'react'
import PropTypes from 'prop-types'
import PointerContext from './pointer-context'

class PointerZone extends React.Component {
  static propTypes = {
    subscribe: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    onMove: PropTypes.func,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.isHovering = false

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
    // Ensure that the target areas client rect is available
    const clientRect = this.getRect()
    if (!clientRect) return

    // Ensure that callbacks exist before doing calculations
    const { onMove, onEnter, onLeave } = this.props
    if (!onMove && !onEnter && !onLeave) return

    const {
      x: rectX,
      y: rectY,
      height: rectHeight,
      width: rectWidth
    } = this.getRect()

    // Make sure the pointer is within the horizontal boundaries of the element
    const inVerticalBounds = clientX > rectX && clientX < rectX + rectWidth
    // Make sure the pointer is within the vertical boundaries of the element
    const inHorizontalBounds = clientY > rectY && clientY < rectY + rectHeight
    // If out of bounds, exit without triggering on pointer move
    if (!inVerticalBounds || !inHorizontalBounds) {
      // Previously hovering, trigger onLeave
      if (this.isHovering) {
        this.isHovering = false
        if (onLeave) onLeave()
      }
      return
    }

    // If not previously hovering, trigger onEnter
    if (!this.hovering) {
      this.isHovering = true
      if (onEnter) onEnter()
    }

    const offsetX = clientX - rectX
    const offsetY = clientY - rectY

    if (onMove) {
      onMove({ offsetX, offsetY, rectWidth, rectHeight })
    }
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

export default function PointerZoneWrapper(props) {
  return (
    <PointerContext.Consumer>
      {({ subscribe }) => <PointerZone {...props} subscribe={subscribe} />}
    </PointerContext.Consumer>
  )
}
