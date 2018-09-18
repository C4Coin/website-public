import React from 'react'
import PropTypes from 'prop-types'
import FormManagerPropTypes from './prop-types'

Field.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fields: PropTypes.objectOf(FormManagerPropTypes.field),
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string
}

export default function Field({
  fieldId,
  fields,
  type = 'text',
  name = fieldId,
  id = fieldId,
  ...rest
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={fields[fieldId].value}
      onChange={({ target }) => fields[fieldId].onChange(target.value)}
      {...rest}
    />
  )
}
