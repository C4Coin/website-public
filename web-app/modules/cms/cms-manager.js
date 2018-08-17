import React from 'react'
import PropTypes from 'prop-types'
import ArticleList from './modules/article-list'
import Team from './modules/team'
import Timeline from './modules/timeline'

CmsManager.propTypes = {
  children: PropTypes.node
}

export default function CmsManager({ children = null }) {
  return (
    <ArticleList.ArticleListManager>
      <Team.TeamManager>
        <Timeline.TimelineManager>{children}</Timeline.TimelineManager>
      </Team.TeamManager>
    </ArticleList.ArticleListManager>
  )
}
