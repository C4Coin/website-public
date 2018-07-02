import React from 'react'
import PropTypes from 'prop-types'
import s from './index.scss'

import TextCurve from 'components/text-curve'

import recycle from 'assets/graphics/method-recycling.complex.svg'
import retire from 'assets/graphics/method-retiring.complex.svg'
import share from 'assets/graphics/method-sharing.complex.svg'

import retiringGraphic from 'assets/graphics/retiring.complex.svg'
import tradingGraphic from 'assets/graphics/trading.complex.svg'

TokenLifecycle.propTypes = {
  className: PropTypes.string
}

export default function TokenLifecycle({ className = '', ...rest }) {
  return (
    <section className={s['container']}>
      <div className={s['earn-container']}>
        <h4 className={`${s['earn-description']} h5`}>
          Participants earn tokens for environmentally conscious behavior
        </h4>
        <div className={s['line-container']}>
          <div className={s['internal-line']} />
        </div>
        <div className={s['example-container']}>
          <div className={s['example-connector']} />
          <EarningExample title="Using Recycled Materials" image={recycle} />
          <EarningExample title="Retiring Carbon Credits" image={retire} />
          <EarningExample title="Sharing Rides Commuting" image={share} />
        </div>
      </div>
      <div className={s['line-container']}>
        <div className={s['line']} />
      </div>
      <div className={s['exchange-container']}>
        <h4 className={`${s['exchange-title']}  h6`}>
          Tokens can then be traded on markets or retired on the C4Coin
          blockchain to maintain network security
        </h4>
        <div className={s['line-container']}>
          <div className={s['internal-line']} />
        </div>
        <div className={s['exchange-graphic-container']}>
          <img src={tradingGraphic} alt="" className={s['exchange-graphic']} />
        </div>
      </div>
      <div className={s['line-container']}>
        <div className={s['long-line']} />
      </div>
      <div className={s['retirement-container']}>
        <h4 className={`${s['retirement-title']} h6`}>
          Participants retiring tokens are rewarded with C4Coin for their
          contribution to the network
        </h4>
        <div className={s['line-container']}>
          <div className={s['internal-line']} />
        </div>
        <div className={s['retirement-graphic-container']}>
          <img src={retiringGraphic} className={s['retirement-graphic']} />
        </div>
      </div>
    </section>
  )
}

EarningExample.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

function EarningExample({ title, image }) {
  return (
    <div className={s['example']}>
      <div className={s['example-graphic-container']}>
        <img src={image} alt="" className={s['example-graphic']} />
      </div>
      <TextCurve text={title} className={s['example-title']} styleSheet={s} />
    </div>
  )
}
