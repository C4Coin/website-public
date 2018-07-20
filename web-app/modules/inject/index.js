import React from 'react'

export default function inject(data, Component) {
  return function ComponentWithData(props) {
    return <Component {...props} {...data} />
  }
}
