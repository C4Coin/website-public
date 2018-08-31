import React from 'react'

import MountainPage from '../../components/mountain-page'
import Card from '../../components/card'

import s from './index.scss'
import FormManager from 'modules/form-manager-module'
import PurchaseForm from './components/purchase-form'

export default function NewPurchase() {
  return (
    <MountainPage>
      <h1 className={s['title']}>Purchase New Credits</h1>
      <p className={`${s['subtitle']} h3`}>With Carbon Credit Capital</p>
      <Card>
        <div className={s['description']}>
          <p>
            Fill out this form so that we know how to send you instructions for
            accessing your CO2KNs once the network has launched. Submitting this
            form will take you to our partner, Carbon Credit Capital (CCC),
            where you can finish the checkout process. Then, CCC will
            automatically handle your CO2KN claim.
          </p>
        </div>
        <PurchaseForm />
      </Card>
    </MountainPage>
  )
}
