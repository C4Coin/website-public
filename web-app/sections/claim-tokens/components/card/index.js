import React from 'react'
import s from './index.scss'

export default function Card({ children = '', className = '', ...rest }) {
  return (
    <div className={`${className} ${s['container']}`}>
      <div className={s['card']}>{children}</div>
    </div>
  )
}
