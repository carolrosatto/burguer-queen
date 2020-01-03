import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Input from '../components/Input';

function Nav() {
  return (
    <section>
      <nav className={css(styles.nav)}>
        <Link className={css(styles.navbtn)} to='/'>Salão</Link>
        <Link className={css(styles.navbtn)} to='/cozinha'>Cozinha</Link>
      </nav>
    </section>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#D95204',
    width: '99vw',
    height: '5vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  navbtn: {
    backgroundColor: '#84BF04',
    borderRadius: '5px',
    width: '9vw',
    height: '2vh',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    fontFamily: 'Lato, sans-serif',
    fontSize: '90%',
    color: '#000000',
    fontWeight: 'bold'
  }
})

export default Nav;