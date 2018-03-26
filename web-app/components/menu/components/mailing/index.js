import React from 'react'

import Mail from 'assets/icons/mail.svg'

import s from './index.scss'

export default function Mailing() {
  return (
    <div className={s['container']}>
      <div className={s['title-display']}>
        <Mail className={s['title']} />
      </div>
      <div className={s['content']}>
        <span className={s['method']}>Contact Us</span>
        <span className={s['method']}>Subscribe</span>
      </div>
    </div>
  )
}
