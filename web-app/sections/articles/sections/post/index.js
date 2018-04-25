import React from 'react'
import PropTypes from 'prop-types'
import Page from 'components/page'
import formatArticle from 'sections/articles/utils/format-article'
import Calendar from 'assets/icons/calendar.svg'
import Timer from 'assets/icons/timer.svg'

import s from './index.scss'

Post.propTypes = {
  content: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired
}

export default function Post({ content, article, ...rest }) {
  const innerHtml = { __html: content }

  const { title, publicationDate, readTime, banner } = article

  const dateDescription = formatArticle.formatDate(publicationDate)
  const readTimeDescription = formatArticle.formatReadTime(readTime)

  return (
    <Page className={s['container']}>
      <div className={s['display']}>
        <h2 className={s['title']}>{title}</h2>
        <div className={s['info']}>
          <div className={s['info-item']}>
            <Calendar className={s['info-icon']} />
            <span className={s['info-text']}>{dateDescription}</span>
          </div>
          <div className={s['info-item']}>
            <Timer className={s['info-icon']} />
            <span className={s['info-text']}>{readTimeDescription}</span>
          </div>
        </div>
        <img src={banner} alt={title} className={s['banner']} />
        <div className={s['content']} dangerouslySetInnerHTML={innerHtml} />
      </div>
    </Page>
  )
}
