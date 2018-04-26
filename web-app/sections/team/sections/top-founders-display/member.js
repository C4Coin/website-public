import React from 'react'
import formatMember from '../../utils/format-member'
import s from './index.scss'

export default function Member({ name, image, title, classPrefix }) {
  return (
    <div className={s[`${classPrefix}-display`]}>
      <div className={s[`${classPrefix}-image-wrapper`]}>
        <img src={image} alt={name} className={s[`${classPrefix}-image`]} />
      </div>
      <div className={s[`${classPrefix}-info`]}>
        <h4 className={s[`${classPrefix}-title`]}>
          {formatMember.acronymize(title)}
        </h4>
        <h3 className={s[`${classPrefix}-name`]}>
          <div>{formatMember.givenName(name)}</div>
          <div>{formatMember.surName(name)}</div>
        </h3>
      </div>
    </div>
  )
}
