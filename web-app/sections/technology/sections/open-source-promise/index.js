import React from 'react'
import GithubIcon from './github-icon'

import s from './index.scss'

export default function OpenSourcePromise({ className = '', ...rest }) {
  return (
    <section {...rest} className={`${s['container']} ${className}`}>
      <div className={s['github-display']}>
        <a href="" />
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
