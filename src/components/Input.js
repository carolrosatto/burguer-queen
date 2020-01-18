import React from 'react'
import { StyleSheet, css } from 'aphrodite';

function Input(props) {
  return (
    <input
      className={css(styles.input)}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}
const styles = StyleSheet.create({
  input: {
    height: '4vh',
    width: '15vw',
    margin: '5px',
    borderRadius: '5px',
    fontSize: '110%'
  }
})

export default Input;