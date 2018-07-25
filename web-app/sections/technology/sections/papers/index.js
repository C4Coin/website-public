import React from 'react'
import PropTypes from 'prop-types'
import s from './index.scss'

Papers.propTypes = {
  whitePaperUrl: PropTypes.string.isRequired,
  litePaperUrl: PropTypes.string.isRequired
}

export default function Papers({ whitePaperUrl, litePaperUrl, ...rest }) {
  return (
    <section {...rest}>
      <div className={s['header']}>
        <svg
          className={s['header-background']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
        >
          <circle cx="5" cy="5" r="5" />
        </svg>
        <h2 className={s['papers-title']}>papers</h2>
      </div>
      <div className={s['content']}>
        <div className={s['about']}>
          <h3 className={s['headline']}>C4Coin Blockchain Design</h3>
          <p className={s['description']}>
            Our White Paper and Lite Paper explain the C4Coin blockchain and how
            it promotes carbon emissions reduction. The Lite Paper provides a
            high-level overview of the project and its benefits. The full White
            Paper provides a more rigorous technical breakdown including the
            math underlying the system.
          </p>
        </div>
        <div className={s['papers-graphic']}>
          <div className={s['white-paper']}>
            <a href={whitePaperUrl} target="_blank">
              <div className={s['paper-button']}>White paper</div>
            </a>
            <p className={s['why']}>Technical</p>
          </div>
          <div className={s['between']}>
            <div className={s['divider']} />
          </div>
          <div className={s['lite-paper']}>
            <a href={litePaperUrl} target="_blank">
              <div className={s['paper-button']}>Lite paper</div>
            </a>
            <p className={s['why']}>Descriptive</p>
          </div>
        </div>
      </div>
    </section>
  )
}
