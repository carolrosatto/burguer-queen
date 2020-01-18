import React from 'react'
import { StyleSheet, css } from 'aphrodite';

function ItensCard(props) {
  return (
    <section
      onClick={props.onClick}
      className={css(styles.menuCard)}
      id={props.id}>
      <p className={css(styles.itemParag)}>{props.name}</p>
      <p className={css(styles.itemParag)}>R$ {props.price},00</p>
    </section>
  )
}
const styles = StyleSheet.create({
  menuCard: {
    backgroundColor: '#F29F05',
    width: '14vw',
    height: '10vh',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '120%',
    display: 'flex',
    fontWeight: 'bold',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  itemParag: {
    margin: '0',
  }
})

export default ItensCard;