import React from 'react'
import PropTypes from 'prop-types'
import camelcase from 'camelcase-keys'

import sVariables from 'components/menu/style/style.variables.scss'

const {
  $activeLogoWidth,
  $latentLogoWidth,
  $activeLogoMarginLeft,
  $latentLogoMarginLeft
} = camelcase(sVariables.global)

const activeWidth = parseInt($activeLogoWidth)
const latentWidth = parseInt($latentLogoWidth)
const activeMarginLeft = parseInt($activeLogoMarginLeft)
const latentMarginLeft = parseInt($latentLogoMarginLeft)

Logo.propTypes = {
  open: PropTypes.number,
  style: PropTypes.object
}

export default function Logo({ open = 0, style = {}, ...rest }) {
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
        transform="translate(43.59 -11.51) rotate(40)"
      />
      <path d="M43.3,89.32,12.72,71.66,45,11.68,64.71,23l9.44-5.23L43.3,0,0,25V75l43.3,25L74.15,82.19l-7.54-6.33Zm-34-59L40,12.58,9.25,69.66h0Z" />
    </svg>
  )
}
