import React from 'react'
import IntegratedMailingSignup from 'components/integrated-mailing-signup'
import Page from 'components/page'
import s from './index.scss'

const { SuccessMessage } = IntegratedMailingSignup
const signupTitle = 'C4Coin News'
const signupDescription =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci'

export default function ArticleList({ ...rest }) {
  const onSuccess = (
    <SuccessMessage
      title="Welcome to the Mailing List"
      description="We send emails weekly about Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis."
    />
  )

  console.log(onSuccess)

  return (
    <Page className={s['container']}>
      ArticleList
      <IntegratedMailingSignup
        title={signupTitle}
        description={signupDescription}
        successComponent={onSuccess}
      />
    </Page>
  )
}
