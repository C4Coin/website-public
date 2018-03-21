import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import baseConfig from 'base.config'
import squidexApi from 'utils/squidex-api'

import About from 'sections/about'
import Articles from 'sections/articles'
import Cover from 'sections/cover'
import NotFound from 'sections/not-found'
import Team from 'sections/team'
import Technology from 'sections/technology'
import PressPackage from 'sections/press-package'
import TermsOfServervice from 'sections/terms-of-service'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    squidexApi
      .authenticate()
      .then(({ data: { access_token: accessToken } }) => {
        return squidexApi.getPosts(accessToken)
      })
      .then(data => {})
  }

  render() {
    return (
      <Router>
        <React.Fragment>
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
        </React.Fragment>
      </Router>
    )
  }
}

window.onload = ReactDOM.render(
  <App />,
  document.getElementById(baseConfig.containerId)
)
