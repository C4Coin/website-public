import React from 'react'

import s from './index.scss'
import appStyleVariables from '!!sass-variable-loader!style/_variables.scss'

const { silver, gold } = appStyleVariables

function Path({ height, width, open, rippleWidth, rippleY, ...rest }) {
  // Position of the origin point
  const closedOriginX = 0
  const openOriginX = width - 2
  const originX = open * (openOriginX - closedOriginX)
  const origin = `M${originX} 0`

  return <path d={`${origin} h2 v${height} h-2 Z`} {...rest} />
}

export default function Border({
  width,
  height,
  rippleWidth,
  rippleY,
  open,
  className = '',
  ...rest
}) {
  const preserveAspectRatio = height === undefined ? 'none' : 'xMidYMid'
  const svgHeight = height || 1

  const style = { width: `${width}px` }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${svgHeight}`}
      preserveAspectRatio={preserveAspectRatio}
      className={`${className} ${s['container']}`}
      style={style}
      {...rest}
    >
      <Path
        height={svgHeight}
        width={width}
        open={open}
        rippleWidth={rippleWidth}
        rippleY={rippleY}
        style={{ fill: silver }}
      />
    </svg>
  )
}
