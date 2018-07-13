import React from 'react'
import PropTypes from 'prop-types'
import Oauth from './modules/oauth'
import ArticleList from './modules/article-list'
import Team from './modules/team'

CmsManager.propTypes = {
  children: PropTypes.node
}

export default function CmsManager({ children = null }) {
  return (
    <Oauth.OauthManager>
      <ArticleList.ArticleListManager>
        <Team.TeamManager>{children}</Team.TeamManager>
      </ArticleList.ArticleListManager>
    </Oauth.OauthManager>
  )
}
