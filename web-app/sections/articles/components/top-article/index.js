import React from 'react'
import PropTypes from 'prop-types'

import DynamicLink from 'components/dynamic-link'
import formatArticle from '../../utils/format-article'
import Calendar from 'assets/icons/calendar.svg'
import Timer from 'assets/icons/timer.svg'
import Link from 'assets/icons/link.svg'

import s from './index.scss'

TopArticle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  publicationDate: PropTypes.instanceOf(Date).isRequired,
  readTime: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired
}

export default function TopArticle({
  title,
  url,
  publicationDate,
  readTime,
  icon,
  banner
}) {
  const dateDescription = formatArticle.formatDate(publicationDate)
  const readTimeDescription = formatArticle.formatReadTime(readTime)

  return (
    <DynamicLink className={s['container']} to={url}>
      <div className={s['display']}>
        <div className={s['image-section']}>
          <div
            className={s['image']}
            style={{ backgroundImage: `url(${banner})` }}
          />
          <div className={s['logo-container']}>
            <div className={s['logo-box']} />
            <div className={s['logo-display']}>
              <img src={icon} className={s['logo']} />
            </div>
          </div>
        </div>
        <div className={s['description-section']}>
          <div className={s['description-display']}>
            <h3 className={s['title']}>{title}</h3>
            <div className={s['actionables']}>
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
              <div className={s['action-icon-display']}>
                <Link className={s['action-icon']} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DynamicLink>
  )
}
