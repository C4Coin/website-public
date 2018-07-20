import React from 'react'
import PropTypes from 'prop-types'
import websitePropTypes from 'utils/website-prop-types'
import Link from 'modules/link-out'
import Mail from 'assets/icons/mail.svg'

import s from './index.scss'

Mailing.propTypes = {
  links: PropTypes.arrayOf(websitePropTypes.link).isRequired,
  open: PropTypes.number,
  linkOnClick: PropTypes.func
}

export default function Mailing({
  links,
  linkOnClick = () => {},
  open = 0,
  ...rest
}) {
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
        {links.map(({ anchor, url }, idx) => (
          <span className={s['method']} key={idx}>
            <Link to={url} className={s['link']} onClick={linkOnClick}>
              {anchor}
            </Link>
          </span>
        ))}
      </div>
    </div>
  )
}
