import React from 'react'
import PropTypes from 'prop-types'
import FormManagerPropTypes from '../prop-types'

import s from './index.scss'

FieldCheckbox.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fields: PropTypes.objectOf(FormManagerPropTypes.field),
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
}

export default function FieldCheckbox({
  fieldId,
  fields,
  className = '',
  name = fieldId,
  id = fieldId,
  ...rest
}) {
  const { value: isChecked, onChange } = fields[fieldId]

  return (
    <span
      className={`${s['box']} ${className} ${isChecked ? s['active'] : ''}`}
    >
      <input
        className={s['input']}
        id={id}
        name={name}
        checked={isChecked}
        onChange={({ target }) => onChange(target.checked)}
        {...rest}
        type="checkbox"
      />
    </span>
  )
}
