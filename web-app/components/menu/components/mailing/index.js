import React from 'react'

import Mail from 'assets/icons/mail.svg'

import s from './index.scss'

export default function Mailing({ open, ...rest }) {
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
