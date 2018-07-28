import React from 'react'
import PropTypes from 'prop-types'
import ListArticle from '../../components/list-article'

import Cms from 'modules/cms'
import formatArticleListData from '../../utils/format-article-list-data'

import s from './index.scss'

MoreArticles.propTypes = {
  maxArticles: PropTypes.number,
  articles: PropTypes.array.isRequired,
  exclude: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchStatus: PropTypes.string.isRequired,
  className: PropTypes.string
}

function MoreArticles({
  maxArticles = 3,
  articles,
  exclude,
  fetchStatus,
  className = '',
  ...rest
}) {
  const selectedArticles = articles
    .filter(article => {
      return !exclude.some(url => url === article.url)
    })
    .slice(0, maxArticles)
  return (
    <div className={`${s['container']} ${className}`} {...rest}>
      <div className={s['display']}>
        {selectedArticles.map((article, idx) => (
          <ListArticle key={idx} className={s['item']} {...article} />
        ))}
      </div>
    </div>
  )
}

export default Cms.injectArticleList(MoreArticles, formatArticleListData)
