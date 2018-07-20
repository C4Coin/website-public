import React from 'react'

const ScrollContext = React.ScrollContext({
  subscribe: function() {
    return function unsubscribe() {}
  }
})

export default ScrollContext
