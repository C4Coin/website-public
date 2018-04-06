import React from 'react'
import IntegratedMailingSignup from 'components/integrated-mailing-signup'

import s from './index.scss'

export default function ArticleList({ ...rest }) {
  return (
    <section className={s['container']}>
      ArticleList
      <IntegratedMailingSignup />
    </section>
  )
}
