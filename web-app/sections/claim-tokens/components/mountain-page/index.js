import React from 'react'
import s from './index.scss'
import Page from 'components/page'
import Banner from '../../components/banner'

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
