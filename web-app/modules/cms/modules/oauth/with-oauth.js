import React from 'react'
import PropTypes from 'prop-types'
import STATUS from './status'

import OauthContext from './oauth-context'

export default function withOauth(Component) {
  return function AuthenticatedComponent(props) {
    return (
      <OauthContext.Consumer>
        {({ token, validationStatus }) => {
          if (validationStatus === STATUS.UNAVAILABLE) {
            const err =
              'Components with tokens must be the child of CmsOauth or another CmsContext.Proivder'
            console.error(err)
            return null
          } else if (validationStatus === STATUS.VALIDATED) {
            return (
              <Component
                {...props}
                token={token}
                validationStatus={validationStatus}
              />
            )
          }
          return null
        }}
      </OauthContext.Consumer>
    )
  }
}
