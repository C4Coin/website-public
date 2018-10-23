import ReactGA from 'react-ga'
import withLocationCallback from './with-location-callback'
import withOnclickTracking from './with-onclick-tracking'

const withPageView = withLocationCallback.bind(null, ReactGA.pageview)

const EVENTS = {
  ACCEPT_PURCHASE_TOS: {
    category: 'Checkout',
    action: 'Accept Terms of Service',
    label: 'Redeem Receipts'
  },
  ACCEPT_REDEEM_TOS: {
    category: 'Checkout',
    action: 'Accept Terms of Service',
    label: 'Redeem Receipts'
  },
  CHECKOUT_WITH_CCC: {
    category: 'Checkout',
    action: 'Complete Form',
    label: 'Purchase New Credits with CCC'
  },
  REDEEM_RECEIPTS: {
    category: 'Checkout',
    action: 'Complete Form',
    label: `Redeem Receipts with C4coin`
  },
  EMAIL_SIGNUP: {
    category: 'Social',
    action: 'Email Signup'
  }
}

const Analytics = {
  withLocationCallback,
  withOnclickTracking,
  withPageView,
  EVENTS
}

export default Analytics
