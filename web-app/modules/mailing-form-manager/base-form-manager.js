import React from 'react'
import PropTypes from 'prop-types'
import STATUS from './status'

const propTypes = {
  children: PropTypes.func.isRequired,
  fields: PropTypes.objectOf(PropTypes.string)
}

class BaseFormManager extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...props.fields
    }

    this.updateField = this.updateField.bind(this)
    this.submit = this.submit.bind(this)
    this.getFields = this.getFields.bind(this)
  }

  submit(subscribe, event) {
    subscribe(this.state)
    event.preventDefault()
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

  localizeMessage(message) {
    return 'either localizeMessage(message) not overloaded, or abstract class Base Form Manager'
  }

  render() {
    const { children } = this.props
    const managedFields = this.getFields()
    const managedSubscribe = this.submit.bind(this, () => {
      console.error('Base Form Manager render needs to be subclassed to submit')
    })
    const status = STATUS.ERROR
    const message = this.localizeMessage(serverMessage)
    return children({ managedFields, managedSubscribe, status, message })
  }
}

BaseFormManager.propTypes = propTypes

export default BaseFormManager
