import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import User from 'modules/user'
import MountainPage from '../../components/mountain-page'
import PurchaseForm from './components/purchase-form'
import Card from '../../components/card'
import env from 'utils/env-utils'
import qs from 'qs'

import s from './index.scss'

console.log(env)

if (env.inDevelopment()) {
  console.log('IN DEV')
}

RedeemReceipts.propTypes = {
  user: User.PropTypes.user,
  location: ReactRouterPropTypes.location.isRequired
}

function RedeemReceipts({ user, location, ...rest }) {
  const { search } = location
  // Parse the query string, set undefined values to ''
  const { first = '', last = '', email = '' } = qs.parse(search)
  const fieldValues = {
    first,
    last,
    email,
    userId: user.id
  }
  return (
    <MountainPage>
      <h1 className={s['title']}>Redeem Receipts</h1>
      <p className={`${s['subtitle']} h3`}>From Existing Registries</p>
      <Card>
        <div className={s['description']}>
          <p>
            If you{"'"}ve retired carbon offsets in the past, you should have a
            receipt from Markit. Fill out the form below to claim your CO2KNs!
          </p>
        </div>
        <PurchaseForm fieldValues={fieldValues} submit={submitPurchase} />
      </Card>
    </MountainPage>
  )
}

function submitPurchase({ hasAgreed, ...fields }) {
  if (hasAgreed.value) {
    console.log('CM Formatted Fields')
    console.log(cmFormat(fields))
    campaignMonitor
      .subscribe(cmCcc.id, cmFormat(fields))
      .then(response => {
        console.log(cccEndpoint(fields))
        window.location.href = cccEndpoint(fields)
      })
      .catch(err => {
        if (env.inDevelopment()) {
          console.log('error')
          console.log(err.stack)
          console.log(err.message)
        }
      })
  }
}

function cmFormat({ first, last, isForCompany, ...fields }) {
  // Remove all fields without a Campaign Monitor Id (cmId)
  // Also remove company field, if isForCompany isn't checked
  const cmFields = Format.objectMap(fields, (name, field) => {
    if (name === 'company' && !isForCompany.value) return {}
    else if (!field.cmId) return {}
    return { [name]: field }
  })
  const name = {
    value: `${first.value} ${last.value}`,
    cmId: cmCcc.name
  }

  return {
    ...cmFields,
    name
  }
}

export default User.withUser(RedeemReceipts)
