import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import FormManagerModule from 'modules/form-manager-module'
import STATUS from './status'
import mailchimp from 'utils/mailchimp'

const { subscribeUrl, fields } = mailchimp

const defaultProps = {
  fields: { [fields.email]: '' }
}

class MailchimpFormManager extends React.Component {
  localizeMessage(message) {
    if (!message) return ''
    if (message.indexOf('already subscribed') > -1) {
      return 'This email is already subscribed, thanks!'
    }
    return 'Please use a valid email.'
  }

  render() {
    return (
      <MailchimpSubscribe
        url={subscribeUrl}
        render={({
          subscribe,
          status: subscribeStatus,
          message: serverMessage
        }) => {
          const status =
            subscribeStatus != null ? subscribeStatus : STATUS.READY
          const message = this.localizeMessage(serverMessage)
          return (
            <FormManagerModule
              submit={subscribe}
              status={status}
              message={message}
              {...this.props}
            />
          )
        }}
      />
    )
  }
}

MailchimpFormManager.defaultProps = defaultProps

export default MailchimpFormManager
