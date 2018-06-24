import React from 'react'
import PropTypes from 'prop-types'
import GithubIcon from './github-icon'

import s from './index.scss'

OpenSourcePromise.propTypes = {
  github: PropTypes.string.isRequired
}

export default function OpenSourcePromise({ className = '', github, ...rest }) {
  return (
    <section {...rest} className={`${s['container']} ${className}`}>
      <div className={s['github-display']}>
        <a href={github} target="_blank">
          <GithubIcon className={s['github-icon']} />
        </a>
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
