import React from 'react'
import PropTypes from 'prop-types'
import IntegratedMailingSignup from 'components/integrated-mailing-signup'
import TopArticle from '../../components/top-article'
import ListArticle from '../../components/list-article'
import Page from 'components/page'
import Cms from 'modules/cms'
import s from './index.scss'

const { withArticleList, STATUS } = Cms.ArticleList

const { SuccessMessage } = IntegratedMailingSignup
const signupTitle = 'C4Coin News'
const signupDescription =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci'

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchStatus: PropTypes.oneOf(Object.values(STATUS))
}

function ArticleList({ articles, fetchStatus, ...rest }) {
  const onSuccess = (
    <SuccessMessage
      title="Welcome to the Mailing List"
      description="We send emails weekly about Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis."
    />
  )

  return (
    <Page className={s['container']}>
      <h2 className={s['title']}>Articles</h2>
      {articles.length > 1 && <TopArticle {...articles[0]} />}
      <div className={s['list-article-container']}>
        <div className={s['list-article-display']}>
          {articles.length > 2 &&
            articles
              .slice(1)
              .map((article, idx) => (
                <ListArticle key={idx} className={s['item']} {...article} />
              ))}
        </div>
      </div>
      <IntegratedMailingSignup
        title={signupTitle}
        description={signupDescription}
        successComponent={onSuccess}
      />
    </Page>
  )
}

export default withArticleList(ArticleList)
