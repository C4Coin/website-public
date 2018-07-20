import React from 'react'
import STATUS from 'modules/cms/status'

const ArticleListContext = React.createContext({
  articles: [],
  fetchStatus: STATUS.READY
})

export default ArticleListContext
