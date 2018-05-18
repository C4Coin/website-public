import React from 'react'
import PropTypes from 'prop-types'

import appConfig from 'app.config.js'
import WebsitePropTypes from 'utils/website-prop-types'
import User from 'modules/user'
import MailingFormManager from 'modules/mailing-form-manager'

import SuccessMessage from './components/success-message'
const { STATUS } = MailingFormManager
import s from './index.scss'
import Arrow from 'assets/icons/arrow.svg'
import moon from 'assets/graphics/moon_1.0.png'

const { communityForm } = appConfig.campaignMonitor

IntegratedMailingSignup.propTypes = {
  user: WebsitePropTypes.user.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  successComponent: PropTypes.node.isRequired,
  className: PropTypes.string,
  backgroundImage: PropTypes.string
}

function IntegratedMailingSignup({
  user,
  title,
  description,
  successComponent,
  className = '',
  backgroundImage = `url(${moon})`,
  ...rest
}) {
  const fields = {
    [communityForm.email]: '',
    [communityForm.userId]: user.id
  }

  return (
    <MailingFormManager
      fields={fields}
      id={appConfig.campaignMonitor.id}
      emailId={communityForm.email}
    >
      {({ managedFields, managedSubmit, status, message }) => {
        const { [communityForm.email]: email } = managedFields

        let emailErrorMessage = status === STATUS.ERROR ? message : ''

        return (
          <section className={`${s['container']} ${className}`}>
            <div className={s['background-container']}>
              <div className={s['background']} style={{ backgroundImage }} />
            </div>
            {status === STATUS.SUCCESS ? (
              successComponent
            ) : (
              <div className={`${s['display']}`}>
                <h3 className={`${s['title']} h1`}>{title}</h3>
                <p className={s['description']}>{description}</p>
                <form className={s['form']} onSubmit={managedSubmit}>
                  <div className={s['email-wrapper']}>
                    <input
                      type="text"
                      id={communityForm.email}
                      name={communityForm.email}
                      value={email.value}
                      onChange={({ target }) => email.onChange(target.value)}
                      className={`${s['email-input']} ${communityForm.email}`}
                      placeholder="Your Favorite Email"
                    />
                    {emailErrorMessage.length > 0 && (
                      <span className={s['email-error']}>
                        {emailErrorMessage}
                      </span>
                    )}
                  </div>
                  <button className={s['submit']} type="submit">
                    <Arrow className={s['submit-arrow']} />
                  </button>
                </form>
              </div>
            )}
          </section>
        )
      }}
    </MailingFormManager>
  )
}

const IntegratedMailingSignupWithUser = User.withUser(IntegratedMailingSignup)
IntegratedMailingSignupWithUser.SuccessMessage = SuccessMessage

export default IntegratedMailingSignupWithUser
