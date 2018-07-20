import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.func.isRequired,
  fields: PropTypes.objectOf(PropTypes.string)
}

class FieldManager extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...props.fields
    }

    this.updateField = this.updateField.bind(this)
    this.getFields = this.getFields.bind(this)
  }

  updateField(name, value) {
    this.setState({
      [name]: value
    })
  }

  getFields() {
    return Object.keys(this.state).reduce((fields, key) => {
      return {
        ...fields,
        [key]: {
          value: this.state[key],
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
