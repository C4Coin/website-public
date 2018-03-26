import React from 'react'
import { Link } from 'react-router-dom'

import Mail from 'assets/icons/mail.svg'

import s from './index.scss'

export default function Footer({ links, ...rest }) {
  return (
    <div className={s['container']}>
      {links.map(({ anchor, url }, idx) => (
        <Link to={url} className={s['link']} key={idx}>
          {anchor}
        </Link>
      ))}
    </div>
  )
}
