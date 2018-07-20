import React from 'react'
import Page from 'components/page'
import IntegratedMailingSignup from 'components/integrated-mailing-signup'

import s from './index.scss'

const { SuccessMessage } = IntegratedMailingSignup

const signupTitle = 'C4Coin News'
const signupDescription = `Get all the big C4Coin developments sent directly to you. We promise to only send the important content.`

const onSuccess = (
  <SuccessMessage
    title="Welcome to the Mailing List"
    description="It's good to have you.  We look forward to sending you project updates!"
  />
)

export default function SubscribePage(props) {
  return (
    <Page {...props} className={s['container']}>
      <IntegratedMailingSignup
        title={signupTitle}
        description={signupDescription}
        successComponent={onSuccess}
      />
    </Page>
  )
}
