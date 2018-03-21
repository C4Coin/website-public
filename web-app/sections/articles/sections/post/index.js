import React from 'react'

import s from './index.scss'

export default function Post ({content, ...rest}) {
  return (
    <section className={s['container']}>
      {content}
    </section>
  )
}
