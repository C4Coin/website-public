import React from 'react'

import s from './index.scss'

export default function PostNotFound ({name = 'Post', ...rest}) {
  return (
    <section className={s['container']}>
      {`${name} not found`}
    </section>
  )
}
