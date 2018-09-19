import React from 'react'
import preSale from 'assets/graphics/pre-sale.png'
import s from './index.scss'

export default function ProgressBar() {
  return (
    <div className={s['container']}>
      <div className={s['display']}>
        <img src={preSale} alt="" className={s['image']} />
      </div>
    </div>
  )
}
