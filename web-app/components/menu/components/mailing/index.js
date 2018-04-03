import React from 'react'
import PropTypes from 'prop-types'

import Mail from 'assets/icons/mail.svg'

import s from './index.scss'

Mailing.propTypes = {
  open: PropTypes.number
}

export default function Mailing({ open = 0, ...rest }) {
  const dollyStyle = {
    opacity: open,
    transform: `translateX(${(1 - open) * 30}px)`
  }

  return (
    <div className={s['container']} {...rest}>
      <div className={s['title-display']}>
        <Mail className={s['title']} />
      </div>
      <div style={dollyStyle}>
        <span className={s['method']}>Contact Us</span>
        <span className={s['method']}>Subscribe</span>
      </div>
    </div>
  )
}
