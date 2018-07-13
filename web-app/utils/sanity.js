import sanityClient from '@sanity/client'
import appConfig from 'app.config'

const sanityConfig = appConfig.sanity
export default sanityClient({
  projectId: sanityConfig.id,
  dataset: sanityConfig.dataset,
  token: '', // not needed currently
  useCdn: true
})
