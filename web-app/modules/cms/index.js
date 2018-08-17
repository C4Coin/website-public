import CmsManager from './cms-manager'
import ArticleList from './modules/article-list'
import Post from './modules/post'
import Team from './modules/team'
import Timeline from './modules/timeline'
import STATUS from './status'

const Cms = {
  Manager: CmsManager,
  injectArticleList: ArticleList.inject,
  Post,
  injectTeam: Team.inject,
  injectTimeline: Timeline.inject,
  STATUS
}

export default Cms
