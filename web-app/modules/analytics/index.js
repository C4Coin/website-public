import ReactGA from 'react-ga'
import withLocationCallback from './with-location-callback'

const withPageView = withLocationCallback.bind(null, ReactGA.pageview)

const Analytics = {
  withLocationCallback,
  withPageView
}

export default Analytics
