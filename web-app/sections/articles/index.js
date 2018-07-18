import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'

import Cms from 'modules/cms'

import ArticleList from './sections/article-list'
import Post from './sections/post'
import PostNotFound from './sections/post-not-found'
import PostLoading from './sections/post-loading'

Articles.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default function Articles({ match, ...rest }) {
  return (
    <Switch>
      <Route path={match.path} exact render={ArticleList} />
      <Route path={`${match.path}/:name`}>
        {({ match: { params } }) => (
          <Cms.Post postSlug={params.name}>
            {({ post, fetchStatus }) => {
              if (fetchStatus === Cms.STATUS.SUCCESS) {
                return <Post post={post} />
              } else if (fetchStatus === Cms.STATUS.FAILED) {
                return <PostNotFound />
              }
              return <PostLoading />
            }}
          </Cms.Post>
        )}
      </Route>
    </Switch>
  )
}
