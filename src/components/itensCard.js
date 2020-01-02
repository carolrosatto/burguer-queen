import React from 'react'
import { StyleSheet, css } from 'aphrodite';

function ItensCard(props) {
    return(
        <section 
        onClick={props.onClick} 
        className={css(styles.menuCard)} 
        id={props.id}>
          <p>{props.name}</p>
          <p>R$ {props.price},00</p>
        </section>
    )
}

const styles = StyleSheet.create({

  menuCard: {
    backgroundColor: '#F29F05',
    width: '110px',
    height: '50px',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize:'80%',
    display: 'flex',
    fontWeight: 'bold',
    padding: '5px',
    margin: '5px',
    justifyContent: 'center',
    alignItems: 'center',
  }

})

export default ItensCard;