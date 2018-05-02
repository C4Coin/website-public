import React from 'react'
import PropTypes from 'prop-types'

import squidexApi from 'utils/virtual-api'
import Oauth from 'modules/cms/modules/oauth'
import STATUS from './status'

const propTypes = {
  postId: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  validationStatus: PropTypes.string.isRequired,
  token: PropTypes.string
}

class PostManager extends React.Component {
  constructor() {
    super()

    this.state = {
      content: '',
      article: -1,
      fetchStatus: STATUS.READY
    }
  }

  componentDidMount() {
    const { postId, validationStatus, token } = this.props

    if (validationStatus === Oauth.STATUS.VALIDATED) {
      this.setState({
        fetchStatus: STATUS.FETCHING
      })
      squidexApi
        .getPost(postId, token)
        .then(({ data }) => {
          this.setState({
            fetchStatus: STATUS.RETRIEVED,
            content: data.content,
            article: data.article
          })
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  render() {
    const { children } = this.props
    const { content, article, fetchStatus } = this.state

    if (fetchStatus !== STATUS.RETRIEVED) {
      return children({ fetchStatus })
    }

    return children({ content, article, fetchStatus })
  }
}

PostManager.propTypes = propTypes

export default Oauth.withOauth(PostManager)
