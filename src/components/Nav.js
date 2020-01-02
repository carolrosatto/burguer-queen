import React from 'react';
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite';

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
    height: '40px', 
  },
  //Como estilizar o Link? Não funciona pq na real ele é um <a> e não um botão
  navbtn: {
    backgroundColor: '#84BF04',
    margin: '30px',

  }
})

export default Nav;