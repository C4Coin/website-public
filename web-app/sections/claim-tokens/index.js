import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Info from './sections/info'
import PurchaseCredits from './sections/purchase-credits'
import RedeemReceipts from './sections/redeem-receipts'

export default function ClaimTokens({ match, ...rest }) {
  return (
    <Switch>
      <Route
        path={`${match.url}/purchase-new-credits`}
        render={PurchaseCredits}
      />
      <Route path={`${match.url}/redeem-receipts`} render={RedeemReceipts} />
      <Route render={Info} />
    </Switch>
  )
}
