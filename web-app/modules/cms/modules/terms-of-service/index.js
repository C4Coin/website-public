import React from 'react'
import PropTypes from 'prop-types'

import sanity from 'utils/sanity'
import STATUS from '../../status'

const propTypes = {
  tosSlug: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

class TermsOfService extends React.Component {
  constructor() {
    super()

    // tos: Terms of Service
    this.state = {
      tos: {},
      fetchStatus: STATUS.READY
    }
  }

  componentDidMount() {
    this.setState({
      fetchStatus: STATUS.INITIALIZING
    })
    const { tosSlug } = this.props
    const query = `
      *[_type == "termsOfService" && slug.current == "${tosSlug}"]{
        title,
        body,
      }[0]
    `
    sanity
      .fetch(query)
      .then(data => {
        if (data) {
          this.setState({
            fetchStatus: STATUS.SUCCESS,
            tos: data
          })
        } else {
          this.setState({
            fetchStatus: STATUS.FAILED
          })
        }
      })
      .catch(error => {
        console.error(error)
        this.setState({
          fetchStatus: STATUS.FAILED
        })
      })
  }

  render() {
    const { children } = this.props
    const { tos, fetchStatus } = this.state

    return children({ tos, fetchStatus })
  }
}

TermsOfService.propTypes = propTypes

export default TermsOfService
