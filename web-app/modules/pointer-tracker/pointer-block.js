import React from 'react'
import PropTypes from 'prop-types'
import PointerZone from './pointer-zone'

PointerBlock.propTypes = {
  onMove: PropTypes.func,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func
}

export default function PointerBlock({ onMove, onEnter, onLeave, ...rest }) {
  return (
    <PointerZone onMove={onMove} onEnter={onEnter} onLeave={onLeave}>
      {({ setZone }) => <div ref={setZone} {...rest} />}
    </PointerZone>
  )
}
