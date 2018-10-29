import appConfig from 'app.config'

const { redeemForm: cmR } = appConfig.campaignMonitor

export default {
  userId: {
    value: '',
    cmId: cmR.userId
  },
  first: {
    value: ''
  },
  last: {
    value: ''
  },
  email: {
    value: '',
    cmId: cmR.email
  },
  isForCompany: false,
  company: {
    value: '',
    cmId: cmR.company
  },
  phone: {
    value: '',
    cmId: cmR.phone
  },
  addressLineOne: {
    value: '',
    cmId: cmR.address1
  },
  addressLineTwo: {
    value: '',
    cmId: cmR.address2
  },
  country: {
    value: '',
    cmId: cmR.country
  },
  state: {
    value: '',
    cmId: cmR.state
  },
  city: {
    value: '',
    cmId: cmR.city
  },
  zip: {
    value: '',
    cmId: cmR.zip
  },
  linkedin: {
    value: '',
    cmId: cmR.linkedin
  },
  github: {
    value: '',
    cmId: cmR.github
  },
  retirementDate: {
    value: '',
    cmId: cmR.retirementDate
  },
  receiptSerial: {
    value: '',
    cmId: cmR.receiptSerial
  },
  companyRole: {
    value: '',
    cmId: cmR.companyRole
  },
  hasAgreed: false
}
