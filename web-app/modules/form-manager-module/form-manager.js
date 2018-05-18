import React from 'react'
import PropTypes from 'prop-types'
import FieldManager from './field-manager'

const propTypes = {
  submit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired
}

class FormManager extends React.Component {
  constructor(props) {
    super(props)

    this.managedSubmit = this.managedSubmit.bind(this)
  }

  managedSubmit(fieldValues, event) {
    const { submit } = this.props
    submit(fieldValues, event)
    event.preventDefault()
  }

  render() {
    const { fields, children, ...otherProps } = this.props
    return (
      <FieldManager fields={fields}>
        {({ managedFields }) => {
          // Get an object with { fieldName, fieldValue } key-value pairs
          const fieldValues = Object.keys(managedFields).reduce(
            (fields, key) => ({
              ...fields,
              [key]: managedFields[key]['value']
            }),
            {}
          )
          const managedSubmit = this.managedSubmit.bind(this, fieldValues)
          return children({ managedFields, managedSubmit, ...otherProps })
        }}
      </FieldManager>
    )
  }
}

FormManager.propTypes = propTypes

export default FormManager
