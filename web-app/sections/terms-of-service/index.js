import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'
import Cms from 'modules/cms'
import TosPage from './sections/tos-page'

TermsOfServervice.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default function TermsOfServervice({ match, ...rest }) {
  const slug = match.params.name !== undefined ? match.params.name : 'tos'

  return (
    <Cms.TermsOfService key="default" tosSlug={slug}>
      {({ tos, fetchStatus }) => {
        if (fetchStatus === Cms.STATUS.FAILED) {
          return <Redirect to="/" />
        } else if (fetchStatus === Cms.STATUS.SUCCESS) {
          return <TosPage {...tos} />
        }
        return <div />
      }}
    </Cms.TermsOfService>
  )
}
