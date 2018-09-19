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
    event.preventDefault()
    submit(fieldValues, event)
  }

  render() {
    const { fields, children, ...otherProps } = this.props
    return (
      <FieldManager fields={fields}>
        {({ managedFields }) => {
          const managedSubmit = this.managedSubmit.bind(this, managedFields)
          return children({ managedFields, managedSubmit, ...otherProps })
        }}
      </FieldManager>
    )
  }
}

FormManager.propTypes = propTypes

export default FormManager
