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

const user = PropTypes.shape({
  id: PropTypes.string
})

const event = PropTypes.shape({
  category: PropTypes.string,
  action: PropTypes.string,
  label: PropTypes.string
})

// Campaign Monitor Fields
const cmField = PropTypes.shape({
  cmId: PropTypes.string,
  value: PropTypes.string
})

export default {
  link,
  member,
  user,
  cmField,
  event
}
