import React from 'react'

export default function Field({
  fieldId,
  fields,
  type = 'text',
  name = null,
  id = null,
  ...rest
}) {
  return (
    <input
      type={type}
      id={id || fieldId}
      name={name || fieldId}
      value={fields[fieldId].value}
      onChange={({ target }) => fields[fieldId].onChange(target.value)}
      {...rest}
    />
  )
}
