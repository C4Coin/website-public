import React from 'react'
import PropTypes from 'prop-types'
import Oauth from 'modules/cms/modules/oauth'
import squidexApi from 'utils/virtual-api'
import ArticleListContext from './article-list-context'
import STATUS from './status'

const propTypes = {
  children: PropTypes.node.isRequired,
  validationStatus: PropTypes.string.isRequired,
  token: PropTypes.string
}

const defaultProps = {
  token: ''
}

class ArticleListManager extends React.Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      fetchStatus: STATUS.READY
    }
  }

  componentDidMount() {
    const { validationStatus, token } = this.props

    if (validationStatus === Oauth.STATUS.VALIDATED) {
      this.setState({
        fetchStatus: STATUS.INITIALIZING
      })
      squidexApi
        .getArticles(token)
        .then(({ data }) => {
          const { items } = data
          this.setState({
            articles: items,
            fetchStatus: STATUS.SUCCESS
          })
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  render() {
    const { children } = this.props
    const { articles, fetchStatus } = this.state
    return (
      <ArticleListContext.Provider value={{ articles, fetchStatus }}>
        {children}
      </ArticleListContext.Provider>
    )
  }
}

ArticleListManager.propTypes = propTypes
ArticleListManager.defaultProps = defaultProps

export default Oauth.withOauth(ArticleListManager)
