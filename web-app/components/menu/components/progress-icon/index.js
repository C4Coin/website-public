import React from 'react'

const positions = {
  before: 'before',
  active: 'active',
  after: 'after'
}

ProgressIcon.positions = positions

export default function ProgressIcon({
  relativePosition = positions.after,
  last = false,
  ...rest
}) {
  const top = relativePosition === positions.after ? 17.3 : 0
  const bottom = relativePosition === positions.before ? 17.3 : 34.6

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 34.6" {...rest}>
      {last ? (
        <polygon points={`15,${top} 30,8.7 30,34.6 0,34.6 0,8.7`} />
      ) : (
        <polygon points={`15,${top} 30,8.7 30,26 15,${bottom} 0,26 0,8.7`} />
      )}
    </svg>
  )
}
