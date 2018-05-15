import React from 'react'
import PropTypes from 'prop-types'
import campaignMonitorUtils from 'utils/campaign-monitor'
import FormManagerModule from 'modules/form-manager-module'
import STATUS from './status'

const { subscribe: campaignMonitorSubsribe } = campaignMonitorUtils

const propTypes = {
  id: PropTypes.string.isRequired
}

class CampaignMonitorFormManager extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: STATUS.READY
    }

    this.subscribe = this.subscribe.bind(this)
  }

  localizeMessage(message) {
    return "This message is a default because I don't know yet how the server will respond"
  }

  subscribe(fields, event) {
    const { id } = this.props
    const { email, ...extraFields } = fields
    if (!email) {
      throw new Error(`Campaign Monitor Managed forms require an 'email' field`)
    }
    this.setState({
      status: STATUS.SENDING
    })
    console.log(event)
    campaignMonitorSubsribe(id, email, extraFields)
      .then(response => {
        console.log('success')
        console.log(response)

        this.setState({
          status: STATUS.SUCCESS
        })
      })
      .catch(err => {
        console.log('error')
        console.error(err.message)
        this.setState({
          status: STATUS.ERROR
        })
      })
  }

  render() {
    const { id, ...otherProps } = this.props
    const { status } = this.state
    return (
      <FormManagerModule
        submit={this.subscribe}
        status={status}
        {...otherProps}
      />
    )
  }
}

CampaignMonitorFormManager.propTypes = propTypes

export default CampaignMonitorFormManager
