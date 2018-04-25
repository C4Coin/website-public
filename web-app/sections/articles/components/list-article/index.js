import React from 'react'
import PropTypes from 'prop-types'
import formatArticle from '../../utils/format-article'
import Calendar from 'assets/icons/calendar.svg'
import Timer from 'assets/icons/timer.svg'
import s from './index.scss'
import DynamicLink from 'components/dynamic-link'

ListArticle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  publicationDate: PropTypes.instanceOf(Date).isRequired,
  readTime: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default function ListArticle({
  title,
  url,
  publicationDate,
  readTime,
  icon,
  banner,
  className = ''
}) {
  const dateDescription = formatArticle.formatDate(publicationDate)
  const readTimeDescription = formatArticle.formatReadTime(readTime)

  return (
    <DynamicLink className={`${s['container']} ${className}`} to={url}>
      <div className={s['image-section']}>
        <div
          className={s['banner']}
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div className={s['mobile-logo-container']}>
          <div className={s['logo-box']} />
          <div className={s['logo-display']}>
            <img src={icon} alt="" className={s['logo']} />
          </div>
        </div>
      </div>
      <div className={s['description-section']}>
        <h3 className={s['title']}>{title}</h3>
        <div className={s['info']}>
          <div className={s['desktop-logo-container']}>
            <div className={s['logo-box']} />
            <div className={s['logo-display']}>
              <img src={icon} alt="" className={s['logo']} />
            </div>
          </div>
          <div className={s['details']}>
            <div className={s['info-item']}>
              <Calendar className={s['info-icon']} />
              <span className={s['info-text']}>{dateDescription}</span>
            </div>
            <div className={s['info-item']}>
              <Timer className={s['info-icon']} />
              <span className={s['info-text']}>{readTimeDescription}</span>
            </div>
          </div>
        </div>
      </div>
    </DynamicLink>
  )
}
