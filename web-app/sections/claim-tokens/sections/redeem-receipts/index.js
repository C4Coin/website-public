import React from 'react'

import MountainPage from '../../components/mountain-page'
import Card from '../../components/card'

import s from './index.scss'

export default function RedeemReceipts() {
  return (
    <MountainPage>
      <h1 className={s['title']}>Redeem Receipts</h1>
      <p className={`${s['subtitle']} h3`}>From Existing Registries</p>
      <Card>
        <div className={s['description']}>
          <p>
            If you've retired carbon offsets in the past, you should have a
            receipt from Markit. Fill out the form below to claim your CO2KNs!
          </p>
        </div>
        <form className={s['form']}>
          <div className={s['row']}>
            <input
              type="text"
              className={s['first-name']}
              placeholder="First Name"
            />
            <input
              type="text"
              className={s['last-name']}
              placeholder="Last Name"
            />
          </div>
          <input type="email" className={s['email']} placeholder="Email" />
        </form>
      </Card>
    </MountainPage>
  )
}
