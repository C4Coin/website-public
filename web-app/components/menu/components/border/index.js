import React from 'react'
import PropTypes from 'prop-types'
import camelcase from 'camelcase-keys'

import PointerTracker from 'modules/pointer-tracker'
import s from './index.scss'
import appStyleVariables from 'style/style.variables.scss'

const { $silver } = camelcase(appStyleVariables.global)
const silver = $silver

Path.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
  rippleWidth: PropTypes.number.isRequired,
  rippleY: PropTypes.number.isRequired
}

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

Border.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  rippleWidth: PropTypes.number,
  rippleY: PropTypes.number,
  open: PropTypes.number,
  className: PropTypes.string,
  onPointerMove: PropTypes.func
}

export default function Border({
  width,
  height = 1,
  rippleWidth = 0,
  rippleY = 0,
  open = 0,
  className = '',
  onPointerMove = () => {},
  ...rest
}) {
  const preserveAspectRatio = height === undefined ? 'none' : 'xMidYMid'

  const style = { width: `${width}px` }
  return (
    <PointerTracker.PointerZone onPointerMove={onPointerMove}>
      {({ setZone }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio={preserveAspectRatio}
          className={`${className} ${s['container']}`}
          style={style}
          ref={setZone}
          {...rest}
        >
          <Path
            height={height}
            width={width}
            open={open}
            rippleWidth={rippleWidth}
            rippleY={rippleY}
            style={{ fill: silver }}
          />
        </svg>
      )}
    </PointerTracker.PointerZone>
  )
}
