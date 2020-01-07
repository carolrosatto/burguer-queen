import React from 'react'

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      component={props.component}>
      {props.title}

    </button>
  )
}
export default Button;