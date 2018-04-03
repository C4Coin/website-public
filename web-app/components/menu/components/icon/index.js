import React from 'react'
import { Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'

const rowDx = -5.196
const rowDy = 9

const colDx = 41.84
const colDy = 2.5

Shape.propTypes = {
  dx: PropTypes.number.isRequired,
  dy: PropTypes.number.isRequired
}

function Shape({ dx, dy, ...rest }) {
  const topLeft = `${-3.8 + dx} ${dy}`
  const topRight = `${43.284 + dx} ${dy}`
  const bottomRight = `${40.397 + dx} ${5 + dy}`
  const bottomLeft = `${-6.691 + dx} ${5 + dy}`
  const points = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`
  return <polygon points={points} {...rest} />
}

const translations = [
  { x: 0, y: 0 },
  { x: rowDx, y: rowDy },
  { x: rowDx * 2, y: rowDy * 2 }
]

export default function Icon(props) {
  return (
    <Motion
      defaultStyle={{ dx: 0, dy: 0 }}
      style={{ dx: spring(colDx), dy: spring(colDy) }}
    >
      {({ dx, dy }) => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 23"
            {...props}
          >
            {translations.map(({ x, y }, idx) => (
              <React.Fragment key={idx}>
                <Shape dx={x + dx} dy={y + dy} />
                <Shape dx={x - colDx + dx} dy={y - colDy + dy} />
              </React.Fragment>
            ))}
          </svg>
        )
      }}
    </Motion>
  )
}
