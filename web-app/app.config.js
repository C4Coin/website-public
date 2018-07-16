export default {
  pressKit:
    'https://drive.google.com/drive/folders/1S30kbNoFy6CJV-647Q3iR4R_DHrsddv8?usp=sharing',
  trackingId: process.env.GA_TRACKING_ID,
  squidex: {
    appName: 'c4coin',
    clientId: 'front-facing',
    clientSecret: process.env.SQUIDEX_CLIENT_SECRET,
    scope: 'squidex-api'
  },
  social: {
    reddit: 'https://www.reddit.com/user/C4Coin/submitted/',
    facebook: 'https://www.facebook.com/c4coinofficial/',
    instagram: 'https://www.instagram.com/c4coin/',
    twitter: 'https://twitter.com/c4coin_official',
    github: 'https://github.com/C4Coin',
    telegram: 'https://t.me/c4coin'
  },
  mailchimp: {
    u: process.env.MAILCHIMP_USER,
    id: process.env.MAILCHIMP_ID,
    url: 'https://c4coin.us12.list-manage.com/subscribe/post'
  },
  campaignMonitor: {
    id: process.env.CAMPAIGN_MONITOR_ID,
    communityForm: {
      email: 'cm-skjjhl-skjjhl',
      userId: 'cm-f-jtnlyy'
    }
  },
  sanity: {
    id: process.env.SANITY_ID,
    dataset: 'public'
  }
}
