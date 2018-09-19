import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import FormManager from 'modules/form-manager-module'
import Format from 'utils/format'
import User from 'modules/user'
import appConfig from 'app.config'
import campaignMonitor from 'utils/campaign-monitor'
import env from 'utils/env-utils'

const Field = FormManager.Field
const { withUser } = User
const { communityForm: cmCommunity } = appConfig.campaignMonitor

function signupForwardTo(history, page, { email, first, last, userId }) {
  if (email.value) {
    // Manually combine the name fields for Campaign Monitor
    const communityFields = {
      email,
      userId,
      name: {
        value: `${first.value} ${last.value}`,
        cmId: cmCommunity.name
      }
    }
    campaignMonitor
      .subscribe(cmCommunity.id, communityFields)
      .then(response => {
        console.log(
          "Thank you for joining our community.  If you're reading this, drop us a line.  We're working on a bunch of projects and doing our best to foster a technical community in New York"
        )
      })
      .catch(err => {
        if (env.inDevelopment()) {
          console.log('error')
          console.log(err.stack)
          console.log(err.message)
        }
      })
  }
  const queryParams = Format.queryString({
    email: email.value,
    first: first.value,
    last: last.value
  })
  history.push(`/claim-co2kn/${page}?${queryParams}`)
}

TokenGenerationSignup.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  user: User.PropTypes.user.isRequired,
  styleSheet: PropTypes.objectOf(PropTypes.string)
}

function TokenGenerationSignup({ history, user, styleSheet: s }) {
  const fields = {
    email: {
      value: '',
      cmId: cmCommunity.email
    },
    first: '',
    last: '',
    userId: {
      value: user.id,
      cmId: cmCommunity.userId
    }
  }

  // Forward to purchase page function
  // const forwardToPurchase = signupForwardTo.bind(
  //   this,
  //   history,
  //   'purchase-new-credits'
  // )

  const forwardToRedeem = signupForwardTo.bind(this, history, 'redeem-receipts')

  return (
    <FormManager fields={fields} submit={forwardToRedeem}>
      {({ managedFields, managedSubmit }) => {
        // Forward to Redeem page, managed fields manually added

        return (
          <form className={s['signup-form']} onSubmit={managedSubmit}>
            <div className={s['form-row']}>
              <Field
                fieldId="first"
                fields={managedFields}
                placeholder="First Name"
                className={s['first-name']}
              />
              <Field
                fieldId="last"
                fields={managedFields}
                placeholder="Last Name"
                className={s['last-name']}
              />
            </div>
            <Field
              fieldId="email"
              fields={managedFields}
              type="email"
              placeholder="Email"
            />
            <div className={s['submit-container']}>
              {/* <button className={s['purchase']}>
              Purchase New Credits
              </button> */}
              <button className={s['redeem']} type="submit">
                Redeem Receipts
              </button>
            </div>
          </form>
        )
      }}
    </FormManager>
  )
}

export default withUser(TokenGenerationSignup)
