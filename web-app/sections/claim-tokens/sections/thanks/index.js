import React from 'react'
import s from './index.scss'
import MountainPage from '../../components/mountain-page'
import Card from '../../components/card'
import Discord from 'components/discord'

import appConfig from 'app.config'

const { discordUrl } = appConfig.social

export default function Info({ history, ...rest }) {
  return (
    <MountainPage className={s['full']}>
      <Card>
        <div className={s['description']}>
          <h2 className={s['title']}>Join Our community</h2>
          <p className={s['featured']}>
            Thanks for participating in the C4Coin token genesis event!
          </p>
          <div className={s['community-display']}>
            <a href={discordUrl} target="_blank">
              <Discord className={s['community-graphic']} />
              <div className={s['title-container']}>
                <div>Join us on</div>
                <strong>Discord</strong>
              </div>
            </a>
          </div>
        </div>
      </Card>
    </MountainPage>
  )
}
