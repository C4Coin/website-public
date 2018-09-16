export default {
  pressKit:
    'https://drive.google.com/drive/folders/1S30kbNoFy6CJV-647Q3iR4R_DHrsddv8?usp=sharing',
  trackingId: process.env.GA_TRACKING_ID,
  social: {
    reddit: 'https://www.reddit.com/user/C4Coin/submitted/',
    facebook: 'https://www.facebook.com/c4coinofficial/',
    instagram: 'https://www.instagram.com/c4coin/',
    twitter: 'https://twitter.com/c4coin_official',
    github: 'https://github.com/C4Coin',
    telegram: 'https://t.me/c4coin'
  },
  campaignMonitor: {
    communityForm: {
      id: process.env.CAMPAIGN_MONITOR_COMMUNITY_ID,
      name: 'cm-name',
      email: 'cm-skjjhl-skjjhl',
      userId: 'cm-f-jtnlyy'
    },
    // Only used for Carbon Credit Capital integration
    cccIntegrationForm: {
      id: process.env.CAMPAIGN_MONITOR_CCC_ID,
      name: 'cm-name',
      email: 'cm-wkkkhd-wkkkhd',
      userId: 'cm-f-jdtyttt',
      campany: 'cm-f-jdtytti',
      phone: 'cm-f-jdtjuth',
      country: 'cm-f-jdtjutk',
      state: 'cm-f-jdtjutu',
      city: 'cm-f-jdtjuil',
      zip: 'cm-f-jdtjuir',
      linkedin: 'cm-f-jdtjuiy',
      github: 'cm-f-jdtjuij'
    }
  },
  sanity: {
    id: process.env.SANITY_ID,
    dataset: 'public'
  },
  email: {
    address: 'info@c4coin.org',
    subject: `C4Coin + Me`
  }
}
