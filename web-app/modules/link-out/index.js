import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import domUtils from 'utils/dom-utils'

LinkOut.propTypes = {
  to: PropTypes.string.isRequired
}

export default function LinkOut({ to, ...rest }) {
  return domUtils.isInternalUrl(to) ? (
    <Link to={to} {...rest} />
  ) : (
    <a href={to} {...rest} />
  )
}
