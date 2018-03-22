import React from 'react'
import PropTypes from 'prop-types'

import squidexApi from 'utils/squidex-api'

class GetArticleList extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    squidexApi
      .authenticate()
      .then(({ data: { access_token: accessToken } }) => {
        return squidexApi.getPosts(accessToken)
      })
      .then(data => {
        this.setState({
          articles: data
        })
      })
  }

  render() {
    return this.props.children({ articles: this.state.articles })
  }
}

GetArticleList.propTypes = {
  children: PropTypes.func.isRequired
}

export default GetArticleList
