import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function KitchenCard(props) {
  return (
    <section
      onClick={props.onClick}
      className={css(styles.orderCard)}>
      <p>Pedido</p>
    </section>
  )
}

const styles = StyleSheet.create({
    orderCard: {
      backgroundColor: '#F29F05',
      width: '20vw',
      height: '15vh',
      fontFamily: 'Lato, sans-serif',
      fontSize: '90%',
      display: 'flex',
      fontWeight: 'bold',
      padding: '10px',
      margin: '25px 3px 3px 25px',
      justifyContent: 'center',
      alignItems: 'center',
    }
  })

export default KitchenCard;