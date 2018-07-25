import React from 'react'
import PropTypes from 'prop-types'

import sanity from 'utils/sanity'
import STATUS from '../../status'

const propTypes = {
  postSlug: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

class Post extends React.Component {
  constructor() {
    super()

    this.state = {
      post: {},
      fetchStatus: STATUS.READY
    }
  }

  componentDidMount() {
    this.setState({
      fetchStatus: STATUS.INITIALIZING
    })
    const { postSlug } = this.props
    const query = `
      *[_type == "post" && slug.current == "${postSlug}"]{
        title,
        readTime,
        "image": mainImage.asset->url,
        publishDate,
        author->{
          name,
          role,
          "image": image.asset->url
        },
        body,
      }[0]
    `
    sanity
      .fetch(query)
      .then(data => {
        this.setState({
          fetchStatus: STATUS.SUCCESS,
          post: data
        })
      })
      .catch(error => {
        console.error(error)
        this.setState({
          fetchStatus: STATUS.FAILED
        })
      })
  }

  render() {
    const { children } = this.props
    const { post, fetchStatus } = this.state

    return children({ post, fetchStatus })
  }
}

Post.propTypes = propTypes

export default Post
