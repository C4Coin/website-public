import PropTypes from 'prop-types'
import inject from 'modules/inject'
import data from './data'

TimelineData.propTypes = {
  children: PropTypes.func.isRequired
}

TimelineData.inject = inject.bind(null, data)

export default function TimelineData({ children, ...rest }) {
  return children(data)
}
