import React from 'react'
import s from './index.scss'
import MountainPage from '../../components/mountain-page'
import Card from '../../components/card'

export default function Info({ history, ...rest }) {
  return (
    <MountainPage className={s['full']}>
      <Card>
        <div className={s['description']}>
          <h2 className={s['title']}>Join Our community</h2>
          <p className={s['featured']}>
            Thanks for participating in the C4Coin token genesis event!
          </p>
        </div>
      </Card>
    </MountainPage>
  )
}
