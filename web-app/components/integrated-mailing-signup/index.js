import React from 'react'
import PropTypes from 'prop-types'

import MailchimpFormManager from 'modules/mailchimp-form-manager'
import mailchimp from 'utils/mailchimp'

const { fields } = mailchimp

export default function IntegratedMailingSignup(props) {
  return (
    <MailchimpFormManager fields={{ [fields.email]: '' }}>
      {({ managedFields, managedSubscribe, status }) => {
        const { [fields.email]: email } = managedFields
        // console.log(status)

        return (
          <form onSubmit={managedSubscribe}>
            <input
              type="text"
              id={fields.email}
              name={fields.email}
              value={email.value}
              onChange={({ target }) => email.onChange(target.value)}
            />
            <button type="submit">submit</button>
          </form>
        )
      }}
    </MailchimpFormManager>
  )
}
