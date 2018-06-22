import React from 'react'
import GithubIcon from './github-icon'

import s from './index.scss'

export default function OpenSourcePromise(props) {
  return (
    <section {...props}>
      <div className={s['github-display']}>
        <GithubIcon className={s['github-icon']} />
      </div>
      <div className={s['promise-display']}>
        <h3 className={s['open-source-promise']}>
          C4Coin is an open source project. You can find and contribute to all
          of our codebases on our Github.
        </h3>
      </div>
    </section>
  )
}
