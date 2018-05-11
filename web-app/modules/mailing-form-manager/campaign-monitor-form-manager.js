import React from 'react'
import PropTypes from 'prop-types'
import BaseFormManager from './base-form-manager'
import appConfig from 'app.config.js'
import campaignMonitorUtils from 'utils/campaign-monitor'

const { requestToken } = campaignMonitorUtils
const { campaignMonitor: campaignMonitorConfig } = appConfig

class CampaignMonitorFormManager extends BaseFormManager {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this, campaignMonitorConfig.id)
  }
  localizeMessage(message) {
    return 'either localizeMessage(message) not overloaded, or abstract class Base Form Manager'
  }

  render() {
    return (
      <form
        action="https://www.createsend.com/t/subscribeerror?description="
        method="post"
      >
        <label for="fieldEmail">Email</label>
        <br />
        <input
          id="fieldEmail"
          class="js-cm-email-input"
          name="cm-skjjhl-skjjhl"
          type="email"
          required
        />
        <button class="js-cm-submit-button" type="submit">
          Subscribe
        </button>
      </form>
    )
  }
}

export default CampaignMonitorFormManager
