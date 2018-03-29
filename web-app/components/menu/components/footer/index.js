import React from 'react'
import { Link } from 'react-router-dom'

import SectionDisplay from '../section-display'

import s from './index.scss'

export default function Footer({ links, open, ...rest }) {
  const dollyStyle = {
    opacity: open,
    transform: `translateX(${(open - 1) * 80}px)`
  }

  return (
    <div className={s['container']}>
      <SectionDisplay open={open} className={s['display']}>
        <div className={s['dolly']} style={dollyStyle}>
          {links.map(({ anchor, url }, idx) => (
            <Link to={url} className={s['link']} key={idx}>
              {anchor}
            </Link>
          ))}
        </div>
      </SectionDisplay>
    </div>
  )
}
