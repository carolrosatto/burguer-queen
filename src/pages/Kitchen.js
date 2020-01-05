import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { db } from '../utils/firebase';
// import firebase from 'firebase/app';
import { StyleSheet, css } from 'aphrodite';
// import ItensCard from '../components/itensCard';
// import MealTimeCard from '../components/MealTimeCard'
// import Button from '../components/Button';
// import Input from '../components/Input'
import KitchenCard from '../components/KitchenCard'

function Kitchen () {

  return (
    <main className={css(styles.mainKitchen)}>
    <div>
        <KitchenCard />
    </div>
    </main>
  );
}

const styles = StyleSheet.create({
  mainKitchen: {
    backgroundColor: '#26140A',
    padding: '10px 0 0 0',
    width: '99vw',
    height: '50vh',
  }
})

export default Kitchen;