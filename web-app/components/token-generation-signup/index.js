import React from 'react'
import FormManager from 'modules/form-manager-module'
import queryString from 'query-string'

const Field = FormManager.Field

const fields = {
  email: '',
  first: '',
  last: ''
}

function signupForwardTo(history, page, fieldValues) {
  const queryParams = queryString.stringify(fieldValues)
  history.push(`/claim-co2kn/${page}?${queryParams}`)
}

export default function TokenGenerationSignup({ history, styleSheet: s }) {
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
