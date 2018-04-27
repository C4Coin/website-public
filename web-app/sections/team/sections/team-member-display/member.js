import React from 'react'
import PropTypes from 'prop-types'
import formatMember from '../../utils/format-member'
import s from './index.scss'

Member.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired
}

export default function Member({ name, image, title, linkedin }) {
  return (
    <div className={s[`display`]}>
      <div className={s[`image-wrapper`]}>
        <img src={image} alt={name} className={s[`image`]} />
      </div>
      <div className={s[`info`]}>
        <h3 className={s[`name`]}>
          <div>{formatMember.givenName(name)}</div>
          <div>{formatMember.surName(name)}</div>
        </h3>
        <h4 className={s[`title`]}>{title}</h4>
      </div>
    </div>
  )
}
