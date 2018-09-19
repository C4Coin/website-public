import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import Page from 'components/page'
import TokenGenerationBanner from './sections/token-generation-banner'
import Capabilities from './sections/capabilities'
import Differences from './sections/differences'
import TokenLifecycle from './sections/token-lifecycle'
import s from './index.scss'

About.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}

export default function About({ history, ...rest }) {
  return (
    <Page className={s['container']}>
      <TokenGenerationBanner history={history} />
      <Capabilities className={s['capabilities']} />
      <Differences />
      <TokenLifecycle />
    </Page>
  )
}
