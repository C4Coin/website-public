import React from 'react'
import s from './index.scss'

export default function papers({ whitePaperUrl, litePaperUrl, ...rest }) {
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
          <h3 className={s['headline']}>C4Chain Infrastructure</h3>
          <p className={s['description']}>
            Both our White Paper and Lite Paper explain the mechanisms running
            the C4Coin blockchain and how it leads to emissions reductions. The
            white paper includes the math Lorem ipsum dolor.
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
