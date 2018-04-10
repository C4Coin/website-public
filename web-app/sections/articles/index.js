import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'

import s from './index.scss'

import FindPost from './modules/find-post'

import ArticleList from './sections/article-list'
import Post from './sections/post'
import PostNotFound from './sections/post-not-found'

Articles.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default function Articles({ match, ...rest }) {
  return (
    <Switch>
      <Route path={match.path} exact render={ArticleList} />
      <Route path={`${match.path}/:name`}>
        {({ match: { params } }) => (
          <FindPost name={params.name} success={Post} failure={PostNotFound} />
        )}
      </Route>
    </Switch>
  )
}
