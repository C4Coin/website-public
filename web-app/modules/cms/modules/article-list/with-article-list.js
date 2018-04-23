import React from 'react'
import STATUS from './status'
import ArticleListContext from './article-list-context'

export default function withArticleList(Component) {
  return function ComponentWithList(props) {
    return (
      <ArticleListContext.Consumer>
        {({ articles, fetchStatus }) => {
          if (fetchStatus === STATUS.UNAVAILABLE) {
            const err =
              'Components expecting article lists must be the child of an ArticleListManager or another ArticleListContext.Proivder'
            console.error(err)
          }
          return (
            <Component
              {...props}
              articles={articles}
              fetchStatus={fetchStatus}
            />
          )
        }}
      </ArticleListContext.Consumer>
    )
  }
}
