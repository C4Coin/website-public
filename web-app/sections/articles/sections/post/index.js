import React from 'react'
import PropTypes from 'prop-types'
import appConfig from 'app.config'
import Page from 'components/page'
import formatArticle from 'sections/articles/utils/format-article'
import Calendar from 'assets/icons/calendar.svg'
import Timer from 'assets/icons/timer.svg'
import BlockContent from '@sanity/block-content-to-react'

import s from './index.scss'

const { sanity: sanityConfig } = appConfig

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default function Post({ post, ...rest }) {
  const { title, publishDate, readTime, image, body } = post

  const dateDescription = formatArticle.formatDate(publishDate)
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
        <img src={image} alt={title} className={s['banner']} />
        <BlockContent
          blocks={body}
          projectId={sanityConfig.id}
          dataset={sanityConfig.dataset}
        />
      </div>
    </Page>
  )
}
