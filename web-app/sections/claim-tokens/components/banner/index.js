import React from 'react'
import mountains from 'assets/graphics/token-generation-mountain.png'
import s from './index.scss'

export default function Banner({ text = 'CO2KN', className = '', ...rest }) {
  return (
    <div className={`${className} ${s['container']}`} {...rest}>
      <div className={s['sky']} {...rest}>
        <p className={s['text']}>{text}</p>
        <img src={mountains} className={s['mountains']} />
        <div className={s['transition']} />
      </div>
    </div>
  )
}
