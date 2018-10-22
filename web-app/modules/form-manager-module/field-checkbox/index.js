import React from 'react'
import PropTypes from 'prop-types'
import FormManagerPropTypes from '../prop-types'

import s from './index.scss'

FieldCheckbox.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fields: PropTypes.objectOf(FormManagerPropTypes.field),
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
}

export default function FieldCheckbox({
  fieldId,
  fields,
  onChange = () => {},
  className = '',
  name = fieldId,
  id = fieldId,
  ...rest
}) {
  const { value: isChecked, onChange: managedOnChange } = fields[fieldId]

  const composedOnChange = ({ target }) => {
    onChange(target.checked)
    managedOnChange(target.checked)
  }

  return (
    <span
      className={`${s['box']} ${className} ${isChecked ? s['active'] : ''}`}
    >
      <input
        className={s['input']}
        id={id}
        name={name}
        checked={isChecked}
        onChange={composedOnChange}
        {...rest}
        type="checkbox"
      />
    </span>
  )
}
