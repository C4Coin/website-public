import React from 'react'
import Page from 'components/page'
import TokenGenerationBanner from './sections/token-generation-banner'
import Capabilities from './sections/capabilities'
import Differences from './sections/differences'
import TokenLifecycle from './sections/token-lifecycle'
import s from './index.scss'

export default function About({ ...rest }) {
  return (
    <Page className={s['container']}>
      <TokenGenerationBanner />
      <Capabilities className={s['capabilities']} />
      <Differences />
      <TokenLifecycle />
    </Page>
  )
}
