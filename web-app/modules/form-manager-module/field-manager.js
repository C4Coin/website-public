import React from 'react'
import PropTypes from 'prop-types'
import FormManagerPropTypes from './prop-types'

const propTypes = {
  children: PropTypes.func.isRequired,
  fields: PropTypes.objectOf(
    PropTypes.oneOfType([
      FormManagerPropTypes.fieldValue,
      FormManagerPropTypes.field
    ])
  )
}

function isString(value) {
  return typeof value === 'string' || value instanceof String
}

function isBoolean(value) {
  return typeof value === 'boolean'
}

/**
 * Manages fields' values using state.
 * Recieves lists of fields to manage through state
 *
 * @extends React
 */
class FieldManager extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.formatFields(props.fields)
    }

    // Connect this
    this.updateField = this.updateField.bind(this)
    this.getFields = this.getFields.bind(this)
  }

  formatFields(fields) {
    return Object.keys(fields).reduce((formatted, key) => {
      const value = fields[key]
      // If the default field value was given unformatted
      // add it to the collection as a formatted object
      if (isString(value) || isBoolean(value)) {
        return {
          ...formatted,
          [key]: { value }
        }
      }
      // Otherwise just add the properly formatted object
      return {
        ...formatted,
        [key]: value
      }
    }, {})
  }

  updateField(name, value) {
    // Only update the 'value' portion of the object in state
    this.setState({
      [name]: {
        ...this.state[name],
        value
      }
    })
  }

  getFields() {
    return Object.keys(this.state).reduce((fields, key) => {
      return {
        ...fields,
        [key]: {
          ...this.state[key],
          onChange: this.updateField.bind(this, key)
        }
      }
    }, {})
  }

  render() {
    const { children } = this.props
    const managedFields = this.getFields()
    return children({ managedFields })
  }
}

FieldManager.propTypes = propTypes

export default FieldManager
