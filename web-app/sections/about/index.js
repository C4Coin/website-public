import React from 'react'
import Page from 'components/page'
import Capabilities from './sections/capabilities'
import Differences from './sections/differences'
import TokenLifecycle from './sections/token-lifecycle'
import MountainBackground from 'components/mountain-background'
import CountdownNow from 'react-countdown-now'
import CountdownClock from 'components/countdown-clock'
import s from './index.scss'

export default function About({ ...rest }) {
  return (
    <Page className={s['container']}>
      <div className={s['above-the-fold']}>
        <MountainBackground text="C4Coin" className={s['background']} />
        <div className={s['event-details']}>
          <p className={s['event-description']}>
            <span className={s['gold']}>CO2KN</span>
            <span>Genesis</span>
            <span>Event</span>
          </p>
          <CountdownNow
            date={Date.parse('september 18, 2018')}
            renderer={props => (
              <CountdownClock className={s['clock']} {...props} />
            )}
          />
        </div>
      </div>
      <Capabilities className={s['capabilities']} />
      <Differences />
      <TokenLifecycle />
    </Page>
  )
}
