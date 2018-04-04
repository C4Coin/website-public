import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import PropTypes from 'prop-types'

import appConfig from 'app.config.js'
import mailchimp from 'utils/mailchimp'

const { subscribeUrl, fields } = mailchimp

const propTypes = {
  children: PropTypes.func.required,
  fields: PropTypes.arrayOf(PropTypes.string)
}

const defaultProps = {
  fields: [fields.email]
}

class MailchimpFormManager extends React.Component {
  constructor(props) {
    super(props)

    const { fields } = props

    let managedFields = {}
    for (let i = 0; i < fields.length; ++i) {
      const fieldName = fields[i]
      if (fieldName) managedFields[fieldName] = ''
    }

    this.state = {
      ...managedFields
    }

    this.updateField = this.updateField.bind(this)
  }

  updateField(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { children } = this.props
    return (
      <MailchimpSubscribe
        url={subscribeUrl}
        render={({ subscribe, status, message }) => children()}
      />
    )
  }
}
