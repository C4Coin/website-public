import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import appConfig from 'app.config'
import Page from 'components/page'
import formatArticle from 'sections/articles/utils/format-article'
import Calendar from 'assets/icons/calendar.svg'
import Timer from 'assets/icons/timer.svg'
import BlockContent from '@sanity/block-content-to-react'
import MoreArticles from '../more-articles'
import Arrow from 'assets/icons/arrow.svg'
import s from './index.scss'

const { sanity: sanityConfig } = appConfig

Post.propTypes = {
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.instanceOf(Date),
  readTime: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
  author: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
}

function Post({
  title,
  publishDate,
  readTime,
  image,
  body,
  author,
  url,
  ...rest
}) {
  const dateDescription = formatArticle.formatDate(publishDate)
  const readTimeDescription = formatArticle.formatReadTime(readTime)

  return (
    <Page {...rest} key={url}>
      <div className={s['banner']} style={{ backgroundImage: `url(${image})` }}>
        <h2 className={s['title']}>
          <div className={s['background-shadow']} />
          <span>{title}</span>
        </h2>
      </div>
      <div className={s['container']}>
        <div className={s['display']}>
          <div className={s['author']}>
            <div
              className={s['author-image']}
              style={{ backgroundImage: `url(${author.image})` }}
            />
            <div className={s['author-info']}>
              <h5 className={s['author-name']}>{author.name}</h5>
              <p className={s['author-role']}>{author.role}</p>
            </div>
          </div>
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
          <div className={s['content']}>
            <BlockContent
              blocks={body}
              projectId={sanityConfig.id}
              dataset={sanityConfig.dataset}
            />
          </div>
        </div>
      </div>
      <div className={s['foot']}>
        <MoreArticles exclude={[url]} />
      </div>
      <Link to="/articles">
        <div className={`${s['back']} h5`}>
          <Arrow className={s['arrow']} /> Articles
        </div>
      </Link>
    </Page>
  )
}

export default Post
