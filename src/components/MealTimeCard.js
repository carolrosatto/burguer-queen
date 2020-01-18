import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function MealTimeCard(props) {
  return (
    <section
      onClick={props.onClick}
      className={css(styles.optioncard)}
      id={props.id}>
      <p>{props.title}</p>
    </section>
  )
}
const styles = StyleSheet.create({
  optioncard: {
    backgroundColor: '#D9A273',
    width: '15vw',
    height: '6vh',
    borderRadius: '5px',
    color: '#D95204',
    fontFamily: 'Lato, sans-serif',
    fontSize: '120%',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    margin: '8px'
  }
});

export default MealTimeCard;