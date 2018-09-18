import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'

const propTypes = {
  isOpen: PropTypes.bool
}

const defaultProps = {
  isOpen: false
}

class Drawer extends React.Component {
  constructor(props) {
    super(props)

    const { isOpen } = props

    this.defaultOpenStyle = {
      open: isOpen * 1
    }
    // Setup State
    this.state = { maxHeight: -1 }
    // Create refs
    this.drawer = React.createRef()
    // Bind local functions to class's 'this'
    this.measureDrawer = this.measureDrawer.bind(this)
  }

  componentDidMount() {
    this.measureDrawer()
    window.addEventListener('resize', this.measureDrawer)
  }

  measureDrawer() {
    const drawerRect = this.drawer.current.getBoundingClientRect()
    this.setState({ maxHeight: drawerRect.height })
  }

  render() {
    const { isOpen, ...rest } = this.props
    const { maxHeight } = this.state
    // spring creates the motion
    const openStyle = {
      open: spring(isOpen * 1, { stiffness: 210, damping: 22 })
    }
    return (
      <Motion defaultStyle={this.defaultOpenStyle} style={openStyle}>
        {({ open: openness }) => {
          // Check if drawer height has been measured
          const height =
            maxHeight >= 0
              ? `${openness * maxHeight}px`
              : openness
                ? 'auto'
                : '0px'
          const containerStyle = {
            height: height,
            overflow: 'hidden'
          }
          return (
            <div style={containerStyle}>
              <div {...rest} ref={this.drawer} />
            </div>
          )
        }}
      </Motion>
    )
  }
}

Drawer.propTypes = propTypes
Drawer.defaultProps = defaultProps

export default Drawer
