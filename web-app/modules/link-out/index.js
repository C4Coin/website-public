import React from 'react'
import { Link } from 'react-router-dom'
import domUtils from 'utils/dom-utils'

export default function LinkOut({ to, ...rest }) {
  return domUtils.isInternalUrl(to) ? (
    <Link to={to} {...rest} />
  ) : (
    <a href={to} {...rest} />
  )
}
