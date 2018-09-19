import CmsManager from './cms-manager'
import ArticleList from './modules/article-list'
import Post from './modules/post'
import TermsOfService from './modules/terms-of-service'
import Team from './modules/team'
import Timeline from './modules/timeline'
import STATUS from './status'

const Cms = {
  Manager: CmsManager,
  injectArticleList: ArticleList.inject,
  Post,
  TermsOfService,
  injectTeam: Team.inject,
  injectTimeline: Timeline.inject,
  STATUS
}

export default Cms
