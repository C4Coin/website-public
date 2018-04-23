import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import s from 'style/index.scss'

import PointerTracker from 'modules/pointer-tracker'
import baseConfig from 'base.config'
import Cms from 'modules/cms'
import Menu from 'components/menu'

import About from 'sections/about'
import Articles from 'sections/articles'
import Cover from 'sections/cover'
import NotFound from 'sections/not-found'
import Team from 'sections/team'
import Technology from 'sections/technology'
import PressPackage from 'sections/press-package'
import TermsOfServervice from 'sections/terms-of-service'

const App = () => (
  <Cms.CmsManager>
    <Router>
      <PointerTracker>
        {({ trackMovement }) => (
          <div className={s['app']} onMouseMove={trackMovement}>
            <Menu
              coverUrl="/"
              navLinks={[
                { anchor: 'about', url: '/about' },
                { anchor: 'articles', url: '/articles' },
                { anchor: 'technology', url: '/technology' },
                { anchor: 'team', url: '/team' }
              ]}
              footerLinks={[
                { anchor: 'press package', url: '/press-package' },
                { anchor: 'terms of service', url: '/terms-of-service' }
              ]}
            />
            <Switch>
              <Route path="/" exact render={Cover} />
              <Route path="/about" render={About} />
              <Route path="/articles" render={Articles} />
              <Route path="/technology" render={Technology} />
              <Route path="/team" render={Team} />
              <Route path="/press-package" render={PressPackage} />
              <Route path="/terms-of-service" render={TermsOfServervice} />
              <Route render={NotFound} />
            </Switch>
          </div>
        )}
      </PointerTracker>
    </Router>
  </Cms.CmsManager>
)

window.onload = ReactDOM.render(
  <App />,
  document.getElementById(baseConfig.containerId)
)
