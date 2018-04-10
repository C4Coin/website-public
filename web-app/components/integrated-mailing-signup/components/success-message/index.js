import React from 'react'
import PropTypes from 'prop-types'

import s from '../../index.scss'

SuccessMessage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default function SuccessMessage({ title, description, ...rest }) {
  return (
    <div className={s['display']} {...rest}>
      <h3 className={`${s['title']} h2`}>{title}</h3>
      <p className={s['description']}>{description}</p>
    </div>
  )
}
