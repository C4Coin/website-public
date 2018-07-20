import React from 'react'
import PropTypes from 'prop-types'
import PointerContext from './pointer-context'

const propTypes = {
  children: PropTypes.func.isRequired
}

class PointerTracker extends React.Component {
  constructor() {
    super()

    this.listeners = []

    this.trackMovement = this.trackMovement.bind(this)
    this.publishMovement = this.publishMovement.bind(this)
    this.subscribe = this.subscribe.bind(this)
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

  publishMovement(coordinates) {
    let currentListeners = this.listeners.slice()
    currentListeners.forEach(listener => {
      listener(coordinates)
    })
  }

  trackMovement(e) {
    e.stopPropagation()
    const coordinates = (({ clientX, clientY }) => ({ clientX, clientY }))(e)
    this.publishMovement(coordinates)
  }

  render() {
    const { children } = this.props
    return (
      <PointerContext.Provider value={{ subscribe: this.subscribe }}>
        {children({ trackMovement: this.trackMovement })}
      </PointerContext.Provider>
    )
  }
}

PointerTracker.propTypes = propTypes

export default PointerTracker
