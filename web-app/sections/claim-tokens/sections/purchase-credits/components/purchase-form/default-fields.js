import appConfig from 'app.config'

const { cccIntegrationForm: cmCcc } = appConfig.campaignMonitor

export default {
  userId: {
    value: '',
    cmId: cmCcc.userId
  },
  first: {
    value: '',
    cccId: 'first'
  },
  last: {
    value: '',
    cccId: 'last'
  },
  email: {
    value: '',
    cmId: cmCcc.email,
    cccId: 'email'
  },
  productId: {
    value: appConfig.ccc.productId,
    cccId: 'add-to-cart'
  },
  quantity: {
    value: '1',
    cccId: 'quantity'
  },
  isForCompany: false,
  company: {
    value: '',
    cmId: cmCcc.company,
    cccId: 'company'
  },
  phone: {
    value: '',
    cmId: cmCcc.phone,
    cccId: 'phone'
  },
  addressLineOne: {
    value: '',
    cmId: cmCcc.address1,
    cccId: 'address_1'
  },
  addressLineTwo: {
    value: '',
    cmId: cmCcc.address2,
    cccId: 'address_2'
  },
  country: {
    value: '',
    cmId: cmCcc.country,
    cccId: 'country'
  },
  state: {
    value: '',
    cmId: cmCcc.state,
    cccId: 'state'
  },
  city: {
    value: '',
    cmId: cmCcc.city,
    cccId: 'city'
  },
  zip: {
    value: '',
    cmId: cmCcc.zip,
    cccId: 'zip'
  },
  linkedin: {
    value: '',
    cmId: cmCcc.linkedin
  },
  github: {
    value: '',
    cmId: cmCcc.github
  },
  hasAgreed: false
}
