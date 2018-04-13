import React from 'react'

const PointerContext = React.createContext({
  subscribe: function() {
    return function unsubscribe() {}
  }
})

export default PointerContext
