import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Button from '../components/Button'

function DeliverCard(props) {
  return (
    <div
      className={css(styles.deliverCard)}>
      <section className={css(styles.deliverText)}>
        <p><strong>{props.clientName}, Mesa: {props.tableNumber}</strong></p>
        <div>{props.clientOrder}</div>
        <p><strong>Status: {props.status}</strong></p>
        <p>{props.time}</p>
        <div className={css(styles.deliverBtnDiv)}><Button onClick={props.onClick} className={css(styles.deliverBtn)} title="Entregar"/></div>
      </section>
    </div>
  )
}
const styles = StyleSheet.create({
  deliverCard: {
    backgroundColor: '#F29F05',
    width: '20vw',
    height: '35vh',
    fontFamily: 'Lato, sans-serif',
    fontSize: '100%',
    display: 'flex',
    padding: '5px',
    margin: '25px 3px 3px 25px',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'auto'
  },
  deliverText: {
    padding: '5px',
  },
  deliverBtn: {
    width: '10vw',
    height: '6vh',
    backgroundColor: '#D95204',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '120%',
    fontWeight: 'bold',
    border: 'none',
    ':hover': {
      backgroundColor: '#D9A273',
      cursor: 'pointer'
    },
    ':active':{
      backgroundColor: '#D95204'
    }
  },
  deliverBtnDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px'
  }
})

export default DeliverCard;