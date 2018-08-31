import React from 'react'
import FormManager from 'modules/form-manager-module'

import s from './index.scss'

export default function FieldCheckbox({
  fieldId,
  fields,
  className = '',
  name = null,
  id = null,
  ...rest
}) {
  const { value: isChecked, onChange } = fields[fieldId]

  return (
    <span
      className={`${s['box']} ${className} ${isChecked ? s['active'] : ''}`}
    >
      <input
        className={s['input']}
        id={id || fieldId}
        name={name || fieldId}
        checked={isChecked}
        onChange={({ target }) => onChange(target.checked)}
        {...rest}
        type="checkbox"
      />
    </span>
  )
}
