import React from 'react'
import PropTypes from 'prop-types'
import domUtils from 'utils/dom-utils'

export default function TextCurve({ text, styleSheet = {}, id = '', ...rest }) {
  const connector = id ? '-' : ''
  const pathId = `${id}${connector}${domUtils.createElementId()}`
  return (
    <svg viewBox="0 0 100 50" {...rest}>
      <path
        id={pathId}
        d="M0,0c0,27.6,22.4,50,50,50s50-22.4,50-50"
        style={{ fill: 'transparent' }}
      />
      <text width="100" className={styleSheet['text']}>
        <textPath
          xlinkHref={`#${pathId}`}
          textAnchor="middle"
          startOffset="50%"
          className={styleSheet['text-path']}
        >
          {text}
        </textPath>
      </text>
    </svg>
  )
}
