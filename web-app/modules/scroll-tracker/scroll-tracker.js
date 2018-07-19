import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.func.isRequired
}

class ScrollPublisher extends React.Component {
  constructor() {
    super()

    listeners = []

    this.subscribe = this.subscribe.bind(this)
    this.publishScroll = this.publishScroll.bind(this)
    this.trackScroll = this.trackScroll.bind(this)
  }

  subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Listeners must be functions')
    }

    let isSubscribed = true
    let listeners = this.listeners
    listeners.push(listener)

    return function unsubscribe() {
      if (!isSubscribed) return

      isSubscribed = false

      const listenerIndex = listeners.indexOf(listener)
      listeners.splice(listenerIndex, 1)
    }
  }

  publishScroll(data) {
    let currentListeners = this.listeners.slice()
    currentListeners.forEach(listener => {
      listener()
    })
  }

  trackScroll(e) {
    this.publishScroll('STAND IN')
  }

  render() {}
}

export default ScrollPublisher
