import React from 'react'
import { Motion, spring } from 'react-motion'

const rowDx = -6.93
const rowDy = 12

const colDx = 45.588
const colDy = 3

const Shape = ({ dx, dy, ...rest }) => {
  const topLeft = `${-3.8 + dx} ${dy}`
  console.log(topLeft)
  const topRight = `${47.32 + dx} ${dy}`
  const bottomRight = `${43.86 + dx} ${6 + dy}`
  const bottomLeft = `${-7.27 + dx} ${6 + dy}`
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
            viewBox="0 0 30 30"
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
