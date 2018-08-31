import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import s from 'style/index.scss'

import PointerTracker from 'modules/pointer-tracker'
import baseConfig from 'base.config'
import User from 'modules/user'
import Cms from 'modules/cms'
import Menu from 'components/menu'

import About from 'sections/about'
import Articles from 'sections/articles'
import Team from 'sections/team'
import Technology from 'sections/technology'
import PressPackage from 'sections/press-package'
import TermsOfServervice from 'sections/terms-of-service'
import SubscribePage from 'sections/subscribe-page'
import ClaimTokens from 'sections/claim-tokens'

import appConfig from './app.config'
const { email, pressKit } = appConfig

const emailUrl = `mailto:${email.address}?subject=${email.subject}`

const App = () => (
  <User.Manager>
    <Cms.Manager>
      <Router>
        <PointerTracker>
          {({ trackMovement }) => (
            <div className={s['app']} onMouseMove={trackMovement}>
              <Menu
                coverUrl="/"
                navLinks={[
                  { anchor: 'about', url: '/about' },
                  { anchor: 'technology', url: '/technology' },
                  { anchor: 'team', url: '/team' },
                  { anchor: 'articles', url: '/articles' }
                ]}
                mailingLinks={[
                  { anchor: 'Contact us', url: emailUrl },
                  { anchor: 'Subscribe', url: '/subscribe' }
                ]}
                footerLinks={[
                  { anchor: 'press package', url: pressKit },
                  { anchor: 'terms of service', url: '/terms-of-service' }
                ]}
              />
              <Switch>
                <Route path="/" exact component={About} />
                <Route path="/about" component={About} />
                <Route path="/articles" component={Articles} />
                <Route path="/technology" component={Technology} />
                <Route path="/team" component={Team} />
                <Route path="/press-package" component={PressPackage} />
                <Route path="/terms-of-service" component={TermsOfServervice} />
                <Route path="/subscribe" component={SubscribePage} />
                <Route path="/claim-co2kn" component={ClaimTokens} />
                <Route render={About} />
              </Switch>
            </div>
          )}
        </PointerTracker>
      </Router>
    </Cms.Manager>
  </User.Manager>
)

window.onload = ReactDOM.render(
  <App />,
  document.getElementById(baseConfig.containerId)
)
