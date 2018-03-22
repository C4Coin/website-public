import React from 'react'
import PropTypes from 'prop-types'

import s from './index.scss'

PostNotFound.propTypes = {
  name: PropTypes.string
}

export default function PostNotFound({ name = 'Post', ...rest }) {
  return <section className={s['container']}>{`${name} not found`}</section>
}
