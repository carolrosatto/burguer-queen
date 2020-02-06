import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import logo from '../img/logo.png'

function Nav() {
  return (
    <section>
      <nav className={css(styles.nav)}>
        <img src={logo} alt='Logo Burger Queen' className={css(styles.logo)} />
        <Link className={css(styles.navbtn)} to='/'>Salão</Link>
        <Link className={css(styles.navbtn)} to='/cozinha'>Cozinha</Link>
        <Link className={css(styles.navbtn)} to='/entrega'>Entrega</Link>
      </nav>
    </section>
  )
}
const styles = StyleSheet.create({
  logo: {
    height: '8vh'
  },
  nav: {
    backgroundColor: '#D95204',
    width: '100vw',
    height: '8vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'static'
  },
  navbtn: {
    backgroundColor: '#84BF04',
    borderRadius: '5px',
    width: '11vw',
    height: '4vh',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    fontFamily: 'Lato, sans-serif',
    fontSize: '110%',
    color: '#000000',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: '#D9A273',
      cursor: 'pointer'
    },
    ':active':{
      backgroundColor: '#84BF04'
    }
  }
})

export default Nav;