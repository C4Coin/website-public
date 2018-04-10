import React from 'react'
import PropTypes from 'prop-types'

import s from './index.scss'

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default function Page({ children, className = '', ...rest }) {
  return (
    <section className={`${s['page']} ${className}`} {...rest}>
      {children}
    </section>
  )
}
