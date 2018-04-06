import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import baseConfig from 'base.config'
import GetArticleList from 'modules/get-article-list.js'

import About from 'sections/about'
import Articles from 'sections/articles'
import Cover from 'sections/cover'
import NotFound from 'sections/not-found'
import Team from 'sections/team'
import Technology from 'sections/technology'
import PressPackage from 'sections/press-package'
import TermsOfServervice from 'sections/terms-of-service'

const App = () => (
  <GetArticleList>
    {({ articles }) => {
      return (
        <Router>
          <React.Fragment>
            <Switch>
              <Route path="/" exact render={Cover} />
              <Route path="/about" render={About} />
              <Route
                path="/articles"
                render={({ match }) => (
                  <Articles articles={articles} match={match} />
                )}
              />
              <Route path="/technology" render={Technology} />
              <Route path="/team" render={Team} />
              <Route path="/press-package" render={PressPackage} />
              <Route path="/terms-of-service" render={TermsOfServervice} />
              <Route render={NotFound} />
            </Switch>
          </React.Fragment>
        </Router>
      )
    }}
  </GetArticleList>
)

window.onload = ReactDOM.render(
  <App />,
  document.getElementById(baseConfig.containerId)
)
