import React from 'react'
import STATUS from './status'

const ArticleListContext = React.createContext({
  articles: [],
  fetchStatus: STATUS.UNAVAILABLE
})

export default ArticleListContext
