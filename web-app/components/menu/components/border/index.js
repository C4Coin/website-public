import React from 'react'

import s from './index.scss'
import appStyleVariables from '!!sass-variable-loader!style/_variables.scss'

const { silver, gold } = appStyleVariables

function Path({ height, width, open, rippleWidth, rippleY, ...rest }) {
  const curveLength = rippleWidth * rippleWidth / 10 + 200
  const pathHeight = height + curveLength

  // Position of the origin point
  const closedOriginX = 0
  const openOriginX = width - 2
  const originX = open * (openOriginX - closedOriginX)
  const originY = -curveLength / 2
  const origin = `M${originX} ${originY}`

  // How far out the ripple starts
  // Arbitrary numbers chosen for
  const baseBorderWidth = 2
  const borderWidth = baseBorderWidth + Math.max(rippleWidth - 10, 0) / 10
  let top = `h${borderWidth}`
  let bottom = `h-${borderWidth}`

  let outerCurve = `v${pathHeight}`
  if (rippleWidth) {
    const handlePortion = 0.21
    const handleLength = curveLength * handlePortion
    const curveWidth = Math.max(rippleWidth - borderWidth, 0)

    const topConnecorLength = rippleY - curveLength / 2
    const topConnector = `V${topConnecorLength}`

    const topHandleY = handleLength
    const topHandle = `0 ${topHandleY}`
    const midHandleY = curveLength / 2 - handleLength
    const midHandlePoint = `${curveWidth} ${midHandleY}`
    const midPoint = `${curveWidth} ${curveLength / 2}`
    const outerCurveTop = `c${topHandle}, ${midHandlePoint}, ${midPoint}`

    const bottomHandleY = curveLength / 2 - handleLength
    const bottomHandlePoint = `${-curveWidth} ${bottomHandleY}`
    const endPoint = `${-curveWidth} ${curveLength / 2}`
    const outerCurveBottom = `s${bottomHandlePoint}, ${endPoint}`

    const bottomConnector = `v${pathHeight - curveLength - topConnecorLength}`

    outerCurve = `${topConnector} ${outerCurveTop} ${outerCurveBottom} ${bottomConnector}`
  }

  return <path d={`${origin} ${top} ${outerCurve} ${bottom} Z`} {...rest} />
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
