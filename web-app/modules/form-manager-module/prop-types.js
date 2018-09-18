import PropTypes from 'prop-types'

const fieldValue = PropTypes.oneOfType([PropTypes.string, PropTypes.bool])

const field = PropTypes.shape({ value: fieldValue.isRequired })

export default {
  fieldValue,
  field
}
