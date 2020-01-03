import React from 'react'
import { StyleSheet, css } from 'aphrodite';

function ItensCard(props) {
    return(
        <section 
        onClick={props.onClick} 
        className={css(styles.menuCard)} 
        id={props.id}>
          {props.name}<br/>
          R$ {props.price},00
        </section>
    )
}

const styles = StyleSheet.create({

  menuCard: {
    backgroundColor: '#F29F05',
    width: '13vw',
    height: '5vh',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize:'90%',
    display: 'flex',
    fontWeight: 'bold',
    padding: '10px',
    margin: '5px',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ItensCard;