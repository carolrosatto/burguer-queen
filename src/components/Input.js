import React from 'react'

function Input (props) {
    return(
        <input 
        type={props.type} 
        onChange={props.onChange} 
        className={props.className} 
        placeholder={props.placeholder} />
    )
}
export default Input;