import PropTypes from 'prop-types'

export default {
  user: PropTypes.exact({
    id: PropTypes.string.isRequired
  })
}
