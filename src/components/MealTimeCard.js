import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function MealTimeCard(props) {
    return(
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
        width: '110px',
        height: '30px',
        borderRadius: '5px',
        color: '#D95204',
        fontFamily: 'Lato, sans-serif',
        fontSize: '90%',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        margin: '5px'
    }
});

export default MealTimeCard;