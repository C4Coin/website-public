import React from 'react'

import sVariables from '!sass-variable-loader!!../../_variables.scss'

const { activeMenuWidth, latentMenuWidth } = sVariables

const activeWidth = parseInt(activeMenuWidth),
  latentWidth = parseInt(latentMenuWidth)

export default function SectionDisplay({
  children,
  open,
  style = {},
  ...rest
}) {
  const displayStyle = {
    ...style,
    width: open * (activeWidth - latentWidth) + latentWidth - 2
  }

  return (
    <div style={displayStyle} {...rest}>
      {children}
    </div>
  )
}
