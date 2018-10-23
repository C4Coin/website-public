import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { Route, Switch } from 'react-router-dom'

import Info from './sections/info'
import Thanks from './sections/thanks'
import PurchaseCredits from './sections/purchase-credits'
import RedeemReceipts from './sections/redeem-receipts'

ClaimTokens.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default function ClaimTokens({ match, ...rest }) {
  return (
    <Switch>
      <Route
        path={`${match.url}/purchase-new-credits`}
        render={PurchaseCredits}
      />
      <Route path={`${match.url}/redeem-receipts`} render={RedeemReceipts} />
      <Route path={`${match.url}/thanks`} render={Thanks} />
      <Route render={Info} />
    </Switch>
  )
}
