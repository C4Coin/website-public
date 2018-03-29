import React from 'react'
import { Motion, spring } from 'react-motion'

const positions = {
  before: 'before',
  current: 'current',
  after: 'after'
}

class ProgressIcon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      previousPosition: props.relativePosition
    }
  }

  componentWillRecieveProps(nextProps) {
    const { relativePosition } = this.props
    this.setState({
      previousPosition: relativePosition
    })
  }

  render() {
    const {
      positionIndex,
      relativePosition = positions.after,
      last = false,
      style = {},
      ...rest
    } = this.props

    const { previousPosition } = this.state

    const prevPoints = {
      top: previousPosition === positions.after ? 17.3 : 0
    }

    const points = {
      top: relativePosition === positions.after ? spring(17.3) : spring(0)
    }

    if (!last) {
      prevPoints.bottom = previousPosition === positions.before ? 17.3 : 34.6
      points.bottom =
        relativePosition === positions.before ? spring(17.3) : spring(34.6)
    }

    const clipId = `progress-icon-${positionIndex}`
    const iconStyle = {
      ...style,
      clipPath: `url(#${clipId})`
    }

    return (
      <Motion defaultStyle={prevPoints} style={points}>
        {({ top, bottom }) => (
          <span style={iconStyle} {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 34.6">
              <defs>
                <clipPath id={clipId}>
                  {last ? (
                    <polygon points={`15,${top} 30,8.7 30,34.6 0,34.6 0,8.7`} />
                  ) : (
                    <polygon
                      points={`15,${top} 30,8.7 30,26 15,${bottom} 0,26 0,8.7`}
                    />
                  )}
                </clipPath>
              </defs>
            </svg>
          </span>
        )}
      </Motion>
    )
  }
}

ProgressIcon.positions = positions

export default ProgressIcon
