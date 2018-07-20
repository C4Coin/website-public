import React from 'react'
import PropTypes from 'prop-types'
import WebsitePropTypes from 'utils/website-prop-types'
import Member from './member'
import s from './index.scss'

TeamMemberDisplay.propTypes = {
  members: PropTypes.arrayOf(WebsitePropTypes.member).isRequired,
  className: PropTypes.string
}

export default function TeamMemberDisplay({
  members,
  className = '',
  ...rest
}) {
  return (
    <div className={`${s['container']} ${className}`}>
      <div className={s['wrapper']}>
        {members.map(member => <Member {...member} key={member.name} />)}
      </div>
    </div>
  )
}
