import React from 'react'

import UserContext from './user-context'

export default function withUser(Component) {
  return function UserComponent(props) {
    return (
      <UserContext.Consumer>
        {user => <Component user={user} {...props} />}
      </UserContext.Consumer>
    )
  }
}
