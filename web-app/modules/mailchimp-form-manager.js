import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import PropTypes from 'prop-types'

import appConfig from 'app.config.js'
import mailchimp from 'utils/mailchimp'

const { subscribeUrl, fields } = mailchimp

const propTypes = {
  children: PropTypes.func.isRequired,
  fields: PropTypes.objectOf(PropTypes.string)
}

const defaultProps = {
  fields: { [fields.email]: '' }
}

class MailchimpFormManager extends React.Component {
  constructor(props) {
    super(props)

    const { fields } = props

    this.state = {
      ...fields
    }

    this.updateField = this.updateField.bind(this)
  }

  updateField(name, value) {
    console.log('name', name)
    console.log('value', value)
    this.setState({
      [name]: value
    })
  }

  render() {
    const { children } = this.props
    const managedFields = Object.keys(this.state).reduce((fields, key) => {
      return {
        ...fields,
        [key]: {
          value: this.state[key],
          onChange: this.updateField.bind(this, key)
        }
      }
    }, {})
    return (
      <MailchimpSubscribe
        url={subscribeUrl}
        render={({ subscribe, status, message }) => {
          const managedSubscribe = subscribe.bind(this, this.state)
          return children({ managedFields, managedSubscribe, status, message })
        }}
      />
    )
  }
}

MailchimpFormManager.propTypes = propTypes
MailchimpFormManager.defaultProps = defaultProps

export default MailchimpFormManager
