import React from 'react'

function Button (props) {
    return(
        <section 
        onClick={props.handleClick} 
        className={props.className}>
          <p>{props.title}</p>
        </section>
    )
}
export default Button;