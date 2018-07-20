import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

DynamicLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default function DynamicLink({ to, ...rest }) {
  if (/^https?:\/\//.test(to)) return <a href={to} {...rest} />
  return <Link to={to} {...rest} />
}
