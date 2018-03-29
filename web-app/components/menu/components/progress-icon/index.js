import React from 'react'
import { Motion, spring } from 'react-motion'

const positions = {
  before: 'before',
  current: 'current',
  after: 'after'
}

function getTopY(position) {
  return position === positions.after ? 17.3 : 0
}

function getBottomY(position) {
  return position === positions.before ? 17.3 : 34.6
}

ProgressIcon.positions = positions

export default function ProgressIcon({
  positionIndex,
  relativePosition = positions.after,
  last = false,
  style = {},
  ...rest
}) {
  const defaultPoints = {
    top: getTopY(relativePosition)
  }

  const points = {
    top: spring(getTopY(relativePosition))
  }

  if (!last) {
    defaultPoints.bottom = getBottomY(relativePosition)
    points.bottom = spring(getBottomY(relativePosition))
  }

  const clipId = `progress-icon-${positionIndex}`
  const iconStyle = {
    ...style,
    clipPath: `url(#${clipId})`
  }

  return (
    <Motion defaultStyle={defaultPoints} style={points}>
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
