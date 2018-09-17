import React from 'react'
import FormManager from 'modules/form-manager-module'
import Format from 'utils/format'
import qs from 'qs'
import User from 'modules/user'
import appConfig from 'app.config'
import campaignMonitor from 'utils/campaign-monitor'

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
        console.log('error')
        console.log(err.stack)
        console.log(err.message)
        this.setState({
          status: STATUS.ERROR,
          errorMessage: err.message
        })
      })
  }
  const queryParams = Format.queryString({
    email: email.value,
    first: first.value,
    last: last.value
  })
  history.push(`/claim-co2kn/${page}?${queryParams}`)
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
  const forwardToPurchase = signupForwardTo.bind(
    this,
    history,
    'purchase-new-credits'
  )
  return (
    <FormManager fields={fields} submit={forwardToPurchase}>
      {({ managedFields, managedSubmit }) => {
        // Forward to Redeem page, managed fields manually added
        const forwardToRedeem = signupForwardTo.bind(
          this,
          history,
          'redeem-receipts',
          managedFields
        )

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

            <button className={s['purchase']} type="submit">
              Purchase New Credits
            </button>
            <button
              className={s['redeem']}
              onClick={() => {
                console.log('ok')
              }}
            >
              Redeem Receipts
            </button>
          </form>
        )
      }}
    </FormManager>
  )
}

export default withUser(TokenGenerationSignup)
