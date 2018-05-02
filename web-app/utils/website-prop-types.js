import PropTypes from 'prop-types'

const link = PropTypes.shape({
  anchor: PropTypes.string,
  url: PropTypes.string
})

const member = PropTypes.shape({
  name: PropTypes.string,
  role: PropTypes.string,
  linkedin: PropTypes.string
})

export default {
  link,
  member
}
