import React from 'react'
import data from './data'

export default function inject(Component) {
  return function ComponentWithTeam(props) {
    return <Component {...props} {...data} />
  }
}
