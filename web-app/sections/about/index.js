import React from 'react'
import Page from 'components/page'
import Capabilities from './sections/capabilities'
import Differences from './sections/differences'
import TokenLifecycle from './sections/token-lifecycle'
import s from './index.scss'

export default function About({ ...rest }) {
  return (
    <Page className={s['container']}>
      <div className={s['above-the-fold']}>
        <h2 className={s['title']}>about</h2>
        <div className={s['feature-container']}>
          <p className={s['feature-text']}>
            We’re creating a platform that rewards everyone for protecting the
            environment.
          </p>
        </div>
      </div>
      <Capabilities className={s['capabilities']} />
      <Differences />
      <TokenLifecycle />
    </Page>
  )
}
