import React from 'react'
import Link from 'modules/link-out'
import PropTypes from 'prop-types'
import domUtils from 'utils/dom-utils'

import WebsitePropTypes from 'utils/website-prop-types'
import s from './index.scss'

Footer.propTypes = {
  links: PropTypes.arrayOf(WebsitePropTypes.link).isRequired,
  linkOnClick: PropTypes.func,
  open: PropTypes.number
}

export default function Footer({
  links,
  linkOnClick = () => {},
  open = 0,
  ...rest
}) {
  const dollyStyle = {
    opacity: open,
    transform: `translateX(${(open - 1) * 80}px)`
  }

  return (
    <div className={s['container']}>
      <div style={dollyStyle}>
        {links.map(({ anchor, url }, idx) => (
          <Link
            to={url}
            className={s['link']}
            key={idx}
            onClick={linkOnClick}
            target={domUtils.isInternalUrl(url) ? '' : '_blank'}
          >
            {anchor}
          </Link>
        ))}
      </div>
    </div>
  )
}
