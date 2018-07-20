import React from 'react'
import PropTypes from 'prop-types'
import s from './index.scss'

import energy from 'assets/graphics/difference-energy.complex.svg'
import hashing from 'assets/graphics/difference-hashing.complex.svg'
import tree from 'assets/graphics/difference-tree.complex.svg'

Differences.propTypes = {
  className: PropTypes.string
}

export default function Differences({ className = '', ...rest }) {
  return (
    <section className={`${s['container']} ${className}`}>
      <DifferentiationPoint
        description="Traditional blockchain networks waste tremendous amounts of energy generating network security."
        image={energy}
        className={s['energy']}
      />
      <DifferentiationPoint
        description="Most of the work on the chain is devoted to solving arbitrary, redundant computations to maintain order."
        image={hashing}
        className={s['hashing']}
      />
      <DifferentiationPoint
        description="By replacing wasteful computations with valuable environmental work, C4Coin is able to create similar network security while helping the planet."
        image={tree}
        className={s['tree']}
      />
    </section>
  )
}

DifferentiationPoint.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string
}

function DifferentiationPoint({ description, image, className = '' }) {
  return (
    <div className={className}>
      <div className={s['point-display']}>
        <div className={s['graphic-container']}>
          <img src={image} className={s['graphic']} />
        </div>
        <div className={s['description-container']}>
          <p className={s['description']}>{description}</p>
        </div>
      </div>
    </div>
  )
}
