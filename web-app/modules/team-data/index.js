import PropTypes from 'prop-types'
import data from './data'
import inject from './inject'

TeamData.propTypes = {
  children: PropTypes.func.isRequired
}

TeamData.inject = inject

export default function TeamData({ children, ...rest }) {
  return children(data)
}
