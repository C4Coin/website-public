import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import ProgressIcon from '../progress-icon'
import WebsitePropTypes from 'utils/website-prop-types'

import s from './index.scss'

const { after, before, current } = ProgressIcon.positions

Nav.propTypes = {
  links: PropTypes.arrayOf(WebsitePropTypes.link),
  active: PropTypes.bool
}
console.log(after)
export default function Nav({
  links,
  currentPageIdx = -1,
  active = false,
  ...rest
}) {
  return (
    <nav className={s['container']}>
      <div className={s['display']}>
        {links.map((linkVal, idx) => {
          const textStyle = {
            backgroundSize: `auto ${links.length * 1.6}em`,
            backgroundPosition: `left -${idx * 1.55}em`
          }
          const iconStyle = {
            backgroundSize: `auto ${links.length * 1.6}em`,
            backgroundPosition: `right -${idx * 1.55}em`
          }
          const positions = [before, current, after]
          const linkPosition =
            positions[(idx > currentPageIdx) + (idx >= currentPageIdx)]

          console.log(linkPosition)

          return (
            <div className={s['item']} key={idx}>
              <Link to={linkVal.url}>
                <span className={s['icon-display']}>
                  <ProgressIcon
                    position={idx}
                    relativePosition={linkPosition}
                    last={idx === links.length - 1}
                    className={s['icon']}
                    style={iconStyle}
                  />
                </span>
                {active && (
                  <span className={s['name']} style={textStyle}>
                    {linkVal.anchor}
                  </span>
                )}
              </Link>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
