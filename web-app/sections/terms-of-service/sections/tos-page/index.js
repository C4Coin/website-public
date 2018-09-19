import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'
import appConfig from 'app.config'

import s from './index.scss'
import Page from 'components/page'

const { sanity: sanityConfig } = appConfig

TosPage.propTypes = {
  body: PropTypes.array
}

export default function TosPage({ body, ...rest }) {
  console.log(body)
  return (
    <Page className={s['container']}>
      <div className={s['display']}>
        <BlockContent
          blocks={body}
          projectId={sanityConfig.id}
          dataset={sanityConfig.dataset}
        />
      </div>
    </Page>
  )
}
