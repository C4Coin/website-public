import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import queryString from 'query-string'
import MountainPage from '../../components/mountain-page'
import Card from '../../components/card'
import PurchaseForm from './components/purchase-form'
import User from 'modules/user'
import appConfig from 'app.config.js'
import Format from 'utils/format'
import campaignMonitor from 'utils/campaign-monitor'

import s from './index.scss'

const { cccIntegrationForm: cmCcc } = appConfig.campaignMonitor

PurchaseCredits.propTypes = {
  user: User.PropTypes.user,
  location: ReactRouterPropTypes.location.isRequired
}
function PurchaseCredits({ user, location, ...rest }) {
  const { search } = location
  // Parse the query string, set undefined values to ''
  const { first = '', last = '', email = '' } = queryString.parse(search)
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
    console.log('CM Formatted Fields')
    console.log(cmFormat(fields))
    campaignMonitor
      .subscribe(cmCcc.id, cmFormat(fields))
      .then(response => {
        console.log(cccEndpoint(fields))
        window.location.href = cccEndpoint(fields)
      })
      .catch(err => {
        console.log('error')
        console.log(err.stack)
        console.log(err.message)
        // this.setState({
        //   status: STATUS.ERROR,
        //   errorMessage: err.message
        // })
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
  console.log('Formatted CCC Endpoint')
  console.log(formattedFields)
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
