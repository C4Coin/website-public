import React from 'react'
import { Link } from 'react-router-dom'
import { Motion, spring } from 'react-motion'

import sVariables from '!sass-variable-loader!!../../_variables.scss'

const {
  activeLogoWidth,
  latentLogoWidth,
  activeLogoMarginLeft,
  latentLogoMarginLeft
} = sVariables

const activeWidth = parseInt(activeLogoWidth),
  latentWidth = parseInt(latentLogoWidth),
  activeMarginLeft = parseInt(activeLogoMarginLeft),
  latentMarginLeft = parseInt(latentLogoMarginLeft)

export default function Logo({ open, style, ...rest }) {
  const logoStyle = {
    ...style,
    width: open * (activeWidth - latentWidth) + latentWidth,
    marginLeft: open * (activeMarginLeft - latentMarginLeft) + latentMarginLeft
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 74.15 100"
      style={logoStyle}
      {...rest}
    >
      <rect
        x="-5.24"
        y="52.13"
        width="85.69"
        height="4"
        transform="translate(43.59 -11.51)
        rotate(40)"
      />
      <path d="M43.3,89.32,12.72,71.66,45,11.68,64.71,23l9.44-5.23L43.3,0,0,25V75l43.3,25L74.15,82.19l-7.54-6.33Zm-34-59L40,12.58,9.25,69.66h0Z" />
    </svg>
  )
}
