import React from 'react'

export default function injectionWrap(
  Wrapper,
  Component,
  translator = inData => inData
) {
  console.log(translator)
  return props => (
    <Wrapper>
      {data => {
        const outData = translator(data)
        return <Component {...outData} {...props} />
      }}
    </Wrapper>
  )
}
