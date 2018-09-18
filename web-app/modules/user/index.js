import UserContext from './user-context'
import UserManager from './user-manager'
import withUser from './with-user'
import PropTypes from './prop-types'

const User = {
  Context: UserContext,
  Manager: UserManager,
  withUser,
  PropTypes
}

export default User
