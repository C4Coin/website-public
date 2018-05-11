import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import PropTypes from 'prop-types'
import STATUS from './status'
import BaseFormManager from './base-form-manager'
import mailchimp from 'utils/mailchimp'

const { subscribeUrl, fields } = mailchimp

const defaultProps = {
  fields: { [fields.email]: '' }
}

class MailchimpFormManager extends BaseFormManager {
  localizeMessage(message) {
    if (!message) return ''
    if (message.indexOf('already subscribed') > -1) {
      return 'This email is already subscribed, thanks!'
    }
    return 'Please use a valid email.'
  }

  render() {
    const { children } = this.props
    const managedFields = this.getFields()
    return (
      <MailchimpSubscribe
        url={subscribeUrl}
        render={({
          subscribe,
          status: subscribeStatus,
          message: serverMessage
        }) => {
          const managedSubscribe = this.submit.bind(this, subscribe)
          const status =
            subscribeStatus != null ? subscribeStatus : STATUS.READY
          const message = this.localizeMessage(serverMessage)
          return children({ managedFields, managedSubscribe, status, message })
        }}
      />
    )
  }
}

MailchimpFormManager.defaultProps = defaultProps

export default MailchimpFormManager
