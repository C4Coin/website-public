import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import qs from 'qs'
import MountainPage from '../../components/mountain-page'
import Card from '../../components/card'
import PurchaseForm from './components/purchase-form'
import User from 'modules/user'
import appConfig from 'app.config.js'
import Format from 'utils/format'
import campaignMonitor from 'utils/campaign-monitor'
import env from 'utils/env-utils'
import ReactGA from 'react-ga'
import Analytics from 'modules/analytics'

import s from './index.scss'

const { cccIntegrationForm: cmCcc } = appConfig.campaignMonitor

PurchaseCredits.propTypes = {
  user: User.PropTypes.user,
  location: ReactRouterPropTypes.location.isRequired
}
function PurchaseCredits({ user, location, ...rest }) {
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
        <PurchaseForm fieldValues={fieldValues} submit={submitPurchase} />
      </Card>
    </MountainPage>
  )
}

function submitPurchase({ hasAgreed, ...fields }) {
  if (hasAgreed.value) {
    ReactGA.event(Analytics.EVENTS.CHECKOUT_WITH_CCC)
    campaignMonitor
      .subscribe(cmCcc.id, cmFormat(fields))
      .then(response => {
        ReactGA.event(Analytics.EVENTS.EMAIL_SIGNUP)
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

function cccEndpoint({ isForCompany, ...fields }) {
  // Remove all fields without a Carbon Credit Capital Id (cccId)
  // Also remove company field, if isForCompany isn't checked
  const formattedFields = Format.objectMap(fields, (name, field) => {
    if (name === 'company' && !isForCompany.value) return {}
    else if (!field.cccId) return {}
    return { [field.cccId]: field.value }
  })
  const queryString = Format.queryString(formattedFields)
  return `${appConfig.ccc.url}/checkout/?${queryString}`
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

export default User.withUser(PurchaseCredits)
