import React from 'react'
import PropTypes from 'prop-types'
import s from './index.scss'
import Page from 'components/page'
import Banner from '../../components/banner'

MountainPage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default function MountainPage({
  children = '',
  className = '',
  ...rest
}) {
  return (
    <Page className={`${s['container']} ${className}`} {...rest}>
      <div className={s['content']}>
        <Banner className={s['background']} />
        {children}
      </div>
    </Page>
  )
}
