import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Button from '../components/Button'

function KitchenCard(props) {
  return (
    <div
      className={css(styles.orderCard)}>
      <section className={css(styles.orderText)}>
        <p><strong>{props.clientName}, Mesa: {props.tableNumber}</strong></p>
        <div>{props.clientOrder}</div>
        <p><strong>Status: {props.status}</strong></p>
        <p>{props.time}</p>
        <div className={css(styles.readyBtnDiv)}><Button onClick={props.onClick} className={css(styles.readyBtn)} title="Pronto!"/></div>
      </section>
    </div>
  )
}
const styles = StyleSheet.create({
  orderCard: {
    backgroundColor: '#F29F05',
    width: '20vw',
    height: '30vh',
    fontFamily: 'Lato, sans-serif',
    fontSize: '100%',
    display: 'flex',
    padding: '5px',
    margin: '25px 3px 3px 25px',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'scroll'
  },
  orderText: {
    padding: '5px',
  },
  readyBtn: {
    width: '10vw',
    height: '6vh',
    backgroundColor: '#84BF04',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '110%',
    fontWeight: 'bold',
    border: 'none',
  },
  readyBtnDiv: {
    display: 'flex',
    justifyContent: 'center'
  }
})

export default KitchenCard;