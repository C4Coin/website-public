import React from 'react'
import PropTypes from 'prop-types'
import s from './index.scss'

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default function Card({ children = '', className = '', ...rest }) {
  return (
    <div className={`${className} ${s['container']}`}>
      <div className={s['card']}>{children}</div>
    </div>
  )
}
