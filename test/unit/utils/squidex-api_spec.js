import { expect } from 'chai'
import sinon from 'sinon'
import squidexApi from 'utils/squidex-api'
import appConfig from 'app.config.js'
import qs from 'qs'

require('../test_helper.js')
const { squidex: { appName, clientId, clientSecret, scope } } = appConfig

describe('squidex-api', () => {
  const fakeAxios = {
    get: sinon.spy(),
    post: sinon.spy()
  }

  describe('authenticate', () => {
    const expected = [
      'https://cloud.squidex.io/identity-server/connect/token',
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: `${appName}:${clientId}`,
        client_secret: clientSecret,
        scope: scope
      })
    ]

    before(async () => {
      squidexApi.__Rewire__('axios', fakeAxios)
      await squidexApi.authenticate()
    })

    after(() => {
      fakeAxios.post.resetHistory()
      // squidexApi.__ResetDependency__('axios')
    })

    it('called post with the correct arguments', () => {
      expect(fakeAxios.post).to.have.been.calledWith(...expected)
    })
  })
})
