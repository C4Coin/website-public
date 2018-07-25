import React from 'react'
import PropTypes from 'prop-types'
import TopArticle from '../../components/top-article'
import ListArticle from '../../components/list-article'
import Page from 'components/page'
import Cms from 'modules/cms'
import formatArticleListData from '../../utils/format-article-list-data'
import s from './index.scss'

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchStatus: PropTypes.oneOf(Object.values(Cms.STATUS))
}

function ArticleList({ articles, fetchStatus, ...rest }) {
  return (
    <Page className={s['container']}>
      <h2 className={s['title']}>Articles</h2>
      {articles.length > 0 && <TopArticle {...articles[0]} />}
      <div className={s['list-article-container']}>
        <div className={s['list-article-display']}>
          {articles.length > 1 &&
            articles
              .slice(1)
              .map((article, idx) => (
                <ListArticle key={idx} className={s['item']} {...article} />
              ))}
        </div>
      </div>
    </Page>
  )
}

export default Cms.injectArticleList(ArticleList, formatArticleListData)
