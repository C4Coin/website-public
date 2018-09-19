import React from 'react'
import s from './index.scss'
import MountainPage from '../../components/mountain-page'
import Card from '../../components/card'
import Discord from 'components/discord'

import appConfig from 'app.config'

const { discord: discordUrl } = appConfig.social

export default function Info({ ...rest }) {
  return (
    <MountainPage className={s['full']}>
      <Card>
        <div className={s['description']}>
          <h2 className={s['title']}>Let the Genesis Begin!</h2>
          <p className={s['featured']}>
            Thanks for helping us create the world{'’'}s first carbon negative
            blockchain and fight climate change.
          </p>
          <p className={s['bit']}>
            We will be contacting over the coming week to verify your receipts.
            If you were selected for a testnet account, you{"'"}ll receive a
            separate email confirmation after October 2nd. Until then, join our
            community on discord.
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
