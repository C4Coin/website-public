import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'
import formatPostData from './utils/format-post-data'

import Cms from 'modules/cms'

import ArticleList from './sections/article-list'
import Post from './sections/post'

Articles.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

function PostRouting({ match }) {
  return (
    <Cms.Post key={match.url} postSlug={match.params.name}>
      {({ post, fetchStatus }) => {
        if (fetchStatus === Cms.STATUS.SUCCESS && post) {
          return (
            <Post {...formatPostData(post)} url={match.url} key={match.url} />
          )
        } else if (fetchStatus === Cms.STATUS.FAILED || !post) {
          return <ArticleList />
        }
        return <ArticleList />
      }}
    </Cms.Post>
  )
}

export default function Articles({ match, ...rest }) {
  return (
    <Switch>
      <Route path={match.path} exact component={ArticleList} />
      <Route path={`${match.path}/:name`} render={PostRouting} />
    </Switch>
  )
}
