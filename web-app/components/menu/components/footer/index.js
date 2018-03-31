import React from 'react'
import { Link } from 'react-router-dom'

import s from './index.scss'

export default function Footer({ links, open, ...rest }) {
  const dollyStyle = {
    opacity: open,
    transform: `translateX(${(open - 1) * 80}px)`
  }

  return (
    <div className={s['container']}>
      <div style={dollyStyle}>
        {links.map(({ anchor, url }, idx) => (
          <Link to={url} className={s['link']} key={idx}>
            {anchor}
          </Link>
        ))}
      </div>
    </div>
  )
}
