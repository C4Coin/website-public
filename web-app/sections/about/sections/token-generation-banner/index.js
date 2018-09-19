import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { Link } from 'react-router-dom'
import PorogressBar from 'components/progress-bar'
import TokenGenerationSignup from 'components/token-generation-signup'
import mountainGraphic from 'assets/graphics/token-genesis-mountain.png'
import s from './index.scss'

TokenGenerationBanner.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}

export default function TokenGenerationBanner({ history, ...rest }) {
  return (
    <section className={s['container']}>
      <h2 className={s['title']}>C4Coin</h2>
      <div className={s['event-container']}>
        <div className={s['event-info-container']}>
          <div className={s['event-info-display']}>
            <div className={s['divider']}>
              <div className={s['line']} />
            </div>
            <div className={s['event-column']}>
              <h3 className={s['event-title']}>CO2KN Generation Event</h3>
              <p className={`${s['event-call-to-action']} h4`}>
                C4Coin invites everyone to participate in our initial token
                generation event!
                <span className={s['mobile-bsp']}>&nbsp;</span>
                <Link to="/claim-co2kn" className={s['mobile-read-more']}>
                  Read More
                </Link>
              </p>
            </div>
            <div className={s['event-column']}>
              <p className={s['event-details']}>
                CO2KNs are equivalent to one carbon credit. Unlike traditional
                carbon credits, they can be used on the network to generate
                security and mine C4Coin.
              </p>
              <p className={s['event-details']}>
                If you own or have retired carbon credits, redeem your
                retirement recipts! If you’re new to the carbon market, you will
                soon be able to purchase carbon credits and automatically earn
                CO2KNs, through our partnership with Carbon Credit
                Capital.&nbsp;
                <Link to="/claim-co2kn">Read More</Link>
              </p>
              <TokenGenerationSignup history={history} styleSheet={s} />
            </div>
          </div>
        </div>
        <div className={s['timeline-container']}>
          <PorogressBar />
          <img src={mountainGraphic} className={s['mountains']} />
        </div>
      </div>
    </section>
  )
}
