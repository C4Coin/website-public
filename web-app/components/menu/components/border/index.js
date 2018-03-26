import React from 'react'

import s from './index.scss'
import appStyleVariables from '!!sass-variable-loader!style/_variables.scss'

const { silver, gold } = appStyleVariables

export default function Border({
  width,
  height,
  rippleWidth = 0,
  rippleY = 0,
  active = false,
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
      {active ? (
        <path
          d={`M${width} 0 H${width - 2} V${svgHeight} H${width} Z`}
          style={{ fill: gold }}
        />
      ) : (
        <path d={`M0 0 H2 V${svgHeight} H0 Z`} style={{ fill: silver }} />
      )}
    </svg>
  )
}
