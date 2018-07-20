import React from 'react'
import PropTypes from 'prop-types'
import campaignMonitorUtils from 'utils/campaign-monitor'
import FormManagerModule from 'modules/form-manager-module'
import STATUS from './status'

const { subscribe: campaignMonitorSubsribe } = campaignMonitorUtils

const propTypes = {
  id: PropTypes.string.isRequired,
  emailId: PropTypes.string.isRequired
}

class CampaignMonitorFormManager extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: STATUS.READY,
      errorMessage: ''
    }

    this.subscribe = this.subscribe.bind(this)
  }

  localizeMessage(message) {
    return "This message is a default because I don't know yet how the server will respond"
  }

  subscribe(fields, event) {
    const { id, emailId } = this.props
    if (!fields[emailId]) {
      throw new Error(
        `Campaign Monitor Managed forms require an email field with the ID you've set:${emailId}`
      )
    }
    this.setState({
      status: STATUS.SENDING
    })
    campaignMonitorSubsribe(id, emailId, fields)
      .then(response => {
        console.log('success')
        console.log(response)

        this.setState({
          status: STATUS.SUCCESS
        })
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

  render() {
    const { id, ...otherProps } = this.props
    const { status, errorMessage } = this.state
    return (
      <FormManagerModule
        submit={this.subscribe}
        status={status}
        message={errorMessage}
        {...otherProps}
      />
    )
  }
}

CampaignMonitorFormManager.propTypes = propTypes

export default CampaignMonitorFormManager
