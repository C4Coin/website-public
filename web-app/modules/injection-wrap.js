import React from 'react'

export default function injectionWrap(
  Wrapper,
  Component,
  translator = inData => inData
) {
  return function InjectionWrappedComponent(props) {
    return (
      <Wrapper>
        {data => {
          const outData = translator(data)
          return <Component {...outData} {...props} />
        }}
      </Wrapper>
    )
  }
}
