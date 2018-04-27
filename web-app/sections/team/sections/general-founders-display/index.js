import React from 'react'
import PropTypes from 'prop-types'
import WebsitePropTypes from 'utils/website-prop-types'
import Member from './member'
import s from './index.scss'

GeneralFoundersDisplay.propTypes = {
  founders: PropTypes.arrayOf(WebsitePropTypes.member).isRequired,
  className: PropTypes.string
}

export default function GeneralFoundersDisplay({
  founders,
  className = '',
  ...rest
}) {
  return (
    <div className={`${s['container']} ${className}`}>
      <div className={s['wrapper']}>
        {founders.map(founder => <Member {...founder} key={founder.name} />)}
      </div>
    </div>
  )
}
