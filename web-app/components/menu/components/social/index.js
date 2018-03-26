import React from 'react'
import PropTypes from 'prop-types'

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
  telegram: telegramUrl
} = appConfig.social

function SocialIcon({ url, children, className, ...rest }) {
  return (
    <div className={`${s['icon-background']} className`}>
      <a href={url} target="_blank">
        {children}
      </a>
    </div>
  )
}

export default function Social({ active, ...rest }) {
  return (
    <div className={s['container']}>
      <div className={s['title-display']}>
        <h3 className={s['title']}>Connect With Us</h3>
      </div>
      {active && (
        <div className={s['content-display']}>
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
          <div className={s['telegram-display']} />
        </div>
      )}
    </div>
  )
}
