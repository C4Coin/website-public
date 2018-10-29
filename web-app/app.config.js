export default {
  pressKit:
    'https://drive.google.com/drive/folders/1S30kbNoFy6CJV-647Q3iR4R_DHrsddv8?usp=sharing',
  trackingId: process.env.GA_TRACKING_ID,
  facebookPixel: process.env.FACEBOOK_PIXEL,
  social: {
    reddit: 'https://www.reddit.com/user/C4Coin/submitted/',
    facebook: 'https://www.facebook.com/c4coinofficial/',
    instagram: 'https://www.instagram.com/c4coin/',
    twitter: 'https://twitter.com/c4coin_official',
    github: 'https://github.com/C4Coin',
    discord: 'https://discord.gg/RnXEtBG'
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
      company: 'cm-f-jdtytti',
      phone: 'cm-f-jdtjuth',
      address1: 'cm-f-jdttuki',
      address2: 'cm-f-jdttukd',
      country: 'cm-f-jdtjutk',
      state: 'cm-f-jdtjutu',
      city: 'cm-f-jdtjuil',
      zip: 'cm-f-jdtjuir',
      linkedin: 'cm-f-jdtjuiy',
      github: 'cm-f-jdtjuij'
    },
    redeemForm: {
      id: process.env.CAMPAIGN_MONITOR_REDEEM_ID,
      name: 'cm-name',
      email: 'cm-wujjtl-wujjtl',
      phone: 'cm-f-jdilxr',
      address1: 'cm-f-jdilxy',
      address2: 'cm-f-jdilxj',
      country: 'cm-f-jdilxt',
      state: 'cm-f-jdilxi',
      city: 'cm-f-jdilxd',
      zip: 'cm-f-jdilxh',
      linkedin: 'cm-f-jdilxk',
      github: 'cm-f-jdilxu',
      userId: 'cm-f-jdilml',
      companyRole: 'cm-f-jdilmr',
      retirementDate: 'cm-f-jdilmy',
      receiptSerial: 'cm-f-jdilmj',
      company: 'cm-f-jdilmt'
    }
  },
  sanity: {
    id: process.env.SANITY_ID,
    dataset: 'public'
  },
  email: {
    address: 'info@c4coin.org',
    subject: `C4Coin + Me`
  },
  ccc: {
    url: 'https://www.carboncreditcapital.com',
    productId: '5307'
  }
}
