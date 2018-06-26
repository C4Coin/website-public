import PropTypes from 'prop-types'
import inject from 'modules/inject'
import data from './data'

TeamData.propTypes = {
  children: PropTypes.func.isRequired
}

TeamData.inject = inject.bind(null, data)

export default function TeamData({ children, ...rest }) {
  return children(data)
}
