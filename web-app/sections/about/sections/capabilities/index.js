import React from 'react'
import PropTypes from 'prop-types'

import s from './index.scss'

Capabilities.propTypes = {
  className: PropTypes.string
}

import fightClimateChangeGraphic from 'assets/graphics/fighting-climate-change.complex.svg'
import sustainableBlockchainGraphic from 'assets/graphics/providing-sustainable-blockchain.complex.svg'
import improveCarbonTradingGraphic from 'assets/graphics/improving-carbon-trading.complex.svg'

export default function Capabilities({ className = '', ...rest }) {
  return (
    <section className={`${s['container']} ${className}`}>
      <h3 className={s['title']}>capabilities</h3>
      <p className={s['description']}>
        C4Coin uses blockchain to create a transparent and acountable carbon
        credit ecosytem.
      </p>
      <div className={s['features-container']}>
        <Feature
          title="Fighting Climate Change"
          description="C4Coin provides businesses  with a free incentive system for promoting eco-friendly behavior"
          image={fightClimateChangeGraphic}
        />
        <Feature
          title="Providing Sustainable Blockchain"
          description="C4Coin hosts distributed applications  that help, not hurt, the environment with each transaction"
          image={sustainableBlockchainGraphic}
        />
        <Feature
          title="Improving Carbon Trading"
          description="C4Coin simplifies carbon trading from issuance to retirement"
          image={improveCarbonTradingGraphic}
        />
      </div>
    </section>
  )
}

function Feature({ title, description, image }) {
  const firstWord = title.split(' ', 1)[0]
  const extendedTitle = title.substring(firstWord.length)
  return (
    <div className={s['feature']}>
      <div className={s['feature-graphic-container']}>
        <img src={image} alt="" className={s['feature-graphic']} />
      </div>
      <h5 className={s['feature-title']}>
        <strong>{firstWord}</strong> {extendedTitle}
      </h5>
      <p className={s['feature-description']}>{description}</p>
    </div>
  )
}
