import React from 'react'
import PropTypes from 'prop-types'
import Oauth from './modules/oauth'
import ArticleList from './modules/article-list'

CmsManager.propTypes = {
  children: PropTypes.node
}

export default function CmsManager({ children = null }) {
  return (
    <Oauth.OauthManager>
      <ArticleList.ArticleListManager>
        {children}
      </ArticleList.ArticleListManager>
    </Oauth.OauthManager>
  )
}
