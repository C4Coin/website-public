import { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import squidexApi from 'utils/squidex-api'

import helper from '../test_helper.js'

describe('squidex-api', () => {
  const fakeAxios = {
    get: sinon.spy(),
    post: sinon.spy()
  }

  describe('authenticate', () => {
    before(async () => {
      squidexApi.__Rewire__('axios', fakeAxios)
      await squidexApi.authenticate()
    })

    after(() => {
      fakeAxios.post.resetHistory()
      // squidexApi.__ResetDependency__('axios')
    })

    it('called post with the correct arguments', () => {
      expect(fakeAxios.post).to.have.been.called
    })
  })
})
