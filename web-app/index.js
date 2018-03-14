import React from 'react'
import ReactDOM from 'react-dom'

import baseConfig from 'base.config'
import squidexApi from 'utils/squidex-api'

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
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return <div />
  }
}

window.onload = ReactDOM.render(
  <App />,
  document.getElementById(baseConfig.containerId)
)
