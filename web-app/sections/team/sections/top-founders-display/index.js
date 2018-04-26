import React from 'react'
import PropTypes from 'prop-types'
import WebsitePropTypes from 'utils/website-prop-types'
import Member from './member'
import s from './index.scss'

export default function TopFoundersDisplay({
  founderOne,
  founderTwo,
  className = '',
  ...rest
}) {
  return (
    <div className={s['container']}>
      <Member {...founderOne} classPrefix="first" />
      <Member {...founderTwo} classPrefix="second" />
    </div>
  )
}
