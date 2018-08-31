import React from 'react'
import PropTypes from 'prop-types'
import Discord from '../discord'
import Facebook from 'assets/icons/facebook.svg'
import Instagram from 'assets/icons/instagram.svg'
import Reddit from 'assets/icons/reddit.svg'
import Twitter from 'assets/icons/twitter.svg'

import appConfig from 'app.config'

import s from './index.scss'

const {
  facebook: facebookUrl,
  instagram: instagramUrl,
  twitter: twitterUrl,
  reddit: redditUrl,
  discord: discordUrl
} = appConfig.social

SocialIcon.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

function SocialIcon({ url, children, className = '', ...rest }) {
  return (
    <div className={`${s['icon-background']} className`}>
      <a href={url} target="_blank">
        {children}
      </a>
    </div>
  )
}

Social.propTypes = {
  open: PropTypes.number
}

export default function Social({ open = 0, ...rest }) {
  const contentStyle = {
    opacity: open,
    transform: `translateX(${(open - 1) * 30}px)`
  }

  const telegramStyle = {
    opacity: open,
    transform: `scale(${open * 0.5 + 0.5})`
  }

  return (
    <div className={s['container']}>
      <div className={s['title-display']}>
        <h3 className={s['title']}>Connect With Us</h3>
      </div>
      <div className={s['content-display']} style={contentStyle}>
        <div className={s['social-icons']}>
          <SocialIcon url={facebookUrl} key="facebook">
            <Facebook className={s['icon']} />
          </SocialIcon>
          <SocialIcon url={instagramUrl} key="instagram">
            <Instagram className={s['icon']} />
          </SocialIcon>
          <SocialIcon url={twitterUrl} key="twitter">
            <Twitter className={s['icon']} />
          </SocialIcon>
          <SocialIcon url={redditUrl} key="reddit">
            <Reddit className={s['icon']} />
          </SocialIcon>
        </div>
      </div>
      <div className={s['community-display']} style={telegramStyle}>
        <a href={discordUrl} target="_blank">
          <Discord className={s['community-graphic']} />
          <div className={s['title-container']}>
            <div>Join us on</div>
            <strong>Discord</strong>
          </div>
        </a>
      </div>
    </div>
  )
}
