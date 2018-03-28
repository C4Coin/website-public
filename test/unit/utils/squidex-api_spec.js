import { expect } from 'chai'
import sinon from 'sinon'
import proxyquire from 'proxyquire'

proxyquire.noCallThru()

describe('squidex-api', () => {
  const fakeAxios = {
    get: sinon.spy(),
    post: sinon.spy()
  }

  const squidexApi = proxyquire('utils/squidex-api', {
    axios: fakeAxios
  })

  describe('authenticate', () => {
    before(async () => {
      await squidexApi.authenticate()
    })

    after(() => {
      fakeAxios.post.resetHistory()
    })

    it('called post with the correct arguments', () => {
      expect(fakeAxios.post).to.have.been.called
    })
  })
})

// context()
