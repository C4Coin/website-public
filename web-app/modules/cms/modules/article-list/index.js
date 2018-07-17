import ArticleListContext from './article-list-context'
import ArticleListManager from './article-list-manager'
import injectionWrap from 'modules/injection-wrap'

const inject = injectionWrap.bind(null, ArticleListContext.Consumer)

const ArticleList = {
  ArticleListManager,
  inject
}

export default ArticleList
