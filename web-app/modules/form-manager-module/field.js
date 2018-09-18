import React from 'react'
import PropTypes from 'prop-types'
import FormManagerPropTypes from './prop-types'

Field.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fields: PropTypes.objectOf(FormManagerPropTypes.field),
  type: PropTypes.string,
  filled: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string
}

export default function Field({
  fieldId,
  fields,
  type = 'text',
  filled = props => props,
  name = fieldId,
  id = fieldId,
  ...rest
}) {
  const { value } = fields[fieldId]
  const props =
    value !== undefined && value !== '' && value !== null ? filled(rest) : rest
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      key={fieldId}
      onChange={({ target }) => fields[fieldId].onChange(target.value)}
      {...props}
    />
  )
}
