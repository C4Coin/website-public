import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import User from 'modules/user'
import MountainPage from '../../components/mountain-page'
import PurchaseForm from './components/purchase-form'
import Card from '../../components/card'
import env from 'utils/env-utils'
import campaignMonitor from 'utils/campaign-monitor'
import appConfig from 'app.config.js'
import Format from 'utils/format'
import qs from 'qs'
import ReactGA from 'react-ga'

import Analytics from 'modules/analytics'

import s from './index.scss'

const { redeemForm: cmR } = appConfig.campaignMonitor

RedeemReceipts.propTypes = {
  user: User.PropTypes.user,
  location: ReactRouterPropTypes.location.isRequired,
  history: PropTypes.any
}

function RedeemReceipts({ user, history, location, ...rest }) {
  console.log(history)

  const submitPurchaseLocal = submitPurchase.bind(null, history)
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
        <PurchaseForm fieldValues={fieldValues} submit={submitPurchaseLocal} />
      </Card>
    </MountainPage>
  )
}

function submitPurchase(history, { hasAgreed, ...fields }) {
  if (hasAgreed.value) {
    ReactGA.event(Analytics.EVENTS.REDEEM_RECEIPTS)
    campaignMonitor
      .subscribe(cmR.id, cmFormat(fields))
      .then(response => {
        ReactGA.event(Analytics.EVENTS.EMAIL_SIGNUP)
        console.log(response)
        history.push('/claim-co2kn/thanks')
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
    if (name === 'companyRole' && !isForCompany.value) return {}
    else if (!field.cmId) return {}
    return { [name]: field }
  })
  const name = {
    value: `${first.value} ${last.value}`,
    cmId: cmR.name
  }

  return {
    ...cmFields,
    name
  }
}

export default User.withUser(RedeemReceipts)
