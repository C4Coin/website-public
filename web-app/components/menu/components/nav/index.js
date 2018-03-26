import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ProgressIcon from '../progress-icon'
import WebsitePropTypes from 'utils/website-prop-types'

import s from './index.scss'

const { after, before, active } = ProgressIcon.positions

Nav.propTypes = {
  links: PropTypes.arrayOf(WebsitePropTypes.link),
  active: PropTypes.bool
}
console.log(after)
export default function Nav({ links, active = false, ...rest }) {
  return (
    <nav className={s['container']}>
      <div className={s['display']}>
        {links.map((linkVal, idx) => (
          <div className={s['item']} key={idx}>
            <Link to={linkVal.url}>
              <span className={s['icon-display']}>
                <ProgressIcon
                  relativePosition={after}
                  last={idx === links.length - 1}
                  className={s['icon']}
                />
              </span>
              {active && <span className={s['name']}>{linkVal.anchor}</span>}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}
