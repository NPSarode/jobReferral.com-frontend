import React from 'react'

const NonProtected = (props) => {
  console.log(props.children)
  return (
    <>
    <div>{props.children}</div>
    </>
  )
}

export default NonProtected
