import React from 'react'
import Page from 'components/page'
import OpenSourcePromise from './sections/open-source-promise'
import Papers from './sections/papers'
import Timeline from './sections/timeline'
import appConfig from 'app.config.js'
import s from './index.scss'

const whitePaper =
  'https://github.com/C4Coin/whitepaper/blob/master/c4coin-wp-v11.pdf'

const litePaper =
  'https://github.com/C4Coin/whitepaper/blob/master/c4coin-lite-paper-v0.1.pdf'

const { github } = appConfig.social

export default function Technology({ ...rest }) {
  return (
    <Page>
      <div className={s['technology-section']}>
        <h2 className={s['technology-title']}>Technology</h2>
        <OpenSourcePromise github={github} />
      </div>
      <Papers whitePaperUrl={whitePaper} litePaperUrl={litePaper} />
      <Timeline />
    </Page>
  )
}
