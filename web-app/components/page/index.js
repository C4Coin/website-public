import React from 'react'
import PropTypes from 'prop-types'
import Analytics from 'modules/analytics'

import s from './index.scss'

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

function Page({ children, className = '', ...rest }) {
  return (
    <section className={`${s['page']} ${className}`} {...rest}>
      {children}
    </section>
  )
}

const PageWithAnalytics = Analytics.withPageView(Page)

export default PageWithAnalytics
