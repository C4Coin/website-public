import React from 'react'
import sanity from 'utils/sanity'
import ArticleListContext from './article-list-context'
import STATUS from '../../status'

class ArticleListManager extends React.Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      fetchStatus: STATUS.READY
    }
  }

  componentDidMount() {
    this.setState({
      fetchStatus: STATUS.INITIALIZING
    })
    const query = `*[_type in ["post", "article"]]|order(weight desc){
      title,
      url,
      slug,
      weight,
      readTime,
      publishDate,
      author,
      "image": mainImage.asset->url,
      "logo": logo.asset->url
    }`
    sanity
      .fetch(query)
      .then(data => {
        this.setState({
          articles: data,
          fetchStatus: STATUS.SUCCESS
        })
      })
      .catch(error => {
        this.setState({
          fetchStatus: STATUS.FAILED
        })
        console.error(error)
      })
  }

  render() {
    const { articles, fetchStatus } = this.state
    return (
      <ArticleListContext.Provider
        value={{ articles, fetchStatus }}
        {...this.props}
      />
    )
  }
}

export default ArticleListManager
