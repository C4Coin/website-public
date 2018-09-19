import React from 'react'
import PropTypes from 'prop-types'
import campaignMonitorUtils from 'utils/campaign-monitor'
import FormManagerModule from 'modules/form-manager-module'
import WebsitePropTypes from 'utils/website-prop-types'
import STATUS from './status'

const { subscribe: campaignMonitorSubsribe } = campaignMonitorUtils

const propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    email: WebsitePropTypes.cmField.isRequired
  })
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

  subscribe(fields, event) {
    const { id } = this.props
    this.setState({
      status: STATUS.SENDING
    })
    campaignMonitorSubsribe(id, fields)
      .then(response => {
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
