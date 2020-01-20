// import { db } from '../utils/firebase';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Fazer um setor com os pedidos prontos para entrega (vindo da cozinha)

//Setor com pedidos entregues

function Deliver() {
  return (
    <main className={css(styles.mainDeliver)}>
      <div>

      </div>
    </main>
  );
}

const styles = StyleSheet.create({
  mainDeliver: {
    backgroundColor: '#26140A',
    padding: '10px 0 0 0',
    width: '100vw',
    height: '90.5vh'
  },
})

export default Deliver;