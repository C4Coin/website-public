import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ProgressIcon from '../progress-icon'
import WebsitePropTypes from 'utils/website-prop-types'

import s from './index.scss'

const { after, before, current } = ProgressIcon.positions

Nav.propTypes = {
  links: PropTypes.arrayOf(WebsitePropTypes.link).required,
  open: PropTypes.number,
  currentPageIdx: PropTypes.number,
  linkOnClick: PropTypes.func
}

export default function Nav({
  links,
  open = 0,
  currentPageIdx = -1,
  linkOnClick = () => {},
  ...rest
}) {
  const linkAnimationRate = 3
  return (
    <nav className={s['container']}>
      <div className={s['display']}>
        {links.map((linkVal, idx) => {
          const iconStyle = {
            backgroundSize: `auto ${links.length * 1.6}em`,
            backgroundPosition: `right -${idx * 1.55}em`
          }
          const positions = [before, current, after]
          const linkPosition =
            positions[(idx > currentPageIdx) + (idx >= currentPageIdx)]

          const start = 1 / linkAnimationRate / links.length * idx

          const position = Math.min(
            Math.max(open - start, 0) * linkAnimationRate,
            1
          )

          const textStyle = {
            transform: `translateX(${30 - 30 * position}px)`,
            backgroundSize: `auto ${links.length * 1.6}em`,
            backgroundPosition: `left -${idx * 1.55}em`
          }

          return (
            <div className={s['item']} key={idx}>
              <Link to={linkVal.url} onClick={linkOnClick}>
                <span className={s['icon-display']}>
                  <ProgressIcon
                    positionIndex={idx}
                    relativePosition={linkPosition}
                    last={idx === links.length - 1}
                    className={s['icon']}
                    style={iconStyle}
                  />
                </span>
                <span className={s['name']} style={textStyle}>
                  {linkVal.anchor}
                </span>
              </Link>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
