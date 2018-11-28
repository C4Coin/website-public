import React from 'react'
import { Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'
import autoprefixer from 'autoprefixer'
import postcssJs from 'postcss-js'

const prefixer = postcssJs.sync([autoprefixer])

const positions = {
  before: 'before',
  current: 'current',
  after: 'after'
}

const positionsList = [positions.before, positions.current, positions.after]

function getTopY(position) {
  return position === positions.after ? 17.3 : 0
}

function getBottomY(position) {
  return position === positions.before ? 17.3 : 34.6
}

ProgressIcon.positions = positions

ProgressIcon.propTypes = {
  positionIndex: PropTypes.number.isRequired,
  relativePosition: PropTypes.oneOf(positionsList),
  last: PropTypes.bool,
  style: PropTypes.object
}

export default function ProgressIcon({
  positionIndex,
  relativePosition = positions.after,
  last = false,
  style = {},
  ...rest
}) {
  const scale = relativePosition === positions.current ? 1 : 0.85
  const transform = scale => `scale(${scale})`

  let defaultPoints = {
    top: getTopY(relativePosition),
    scale: scale
  }

  let points = {
    top: spring(getTopY(relativePosition)),
    scale: spring(scale, { stiffness: 300, dampning: 24 })
  }

  if (!last) {
    defaultPoints.bottom = getBottomY(relativePosition)
    points.bottom = spring(getBottomY(relativePosition))
  }

  const clipId = `progress-icon-${positionIndex}`
  const iconStyle = {
    ...style,
    WebkitClipPath: `url(#${clipId})`,
    clipPath: `url(#${clipId})`
  }

  return (
    <Motion defaultStyle={defaultPoints} style={points}>
      {({ top, bottom, scale }) => (
        <span
          style={prefixer({ ...iconStyle, transform: transform(scale) })}
          {...rest}
        >
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
