import React from 'react'
import PropTypes from 'prop-types'

import s from './index.scss'

Post.propTypes = {
  content: PropTypes.string
}

export default function Post({ content, ...rest }) {
  return <section className={s['container']}>{content}</section>
}
