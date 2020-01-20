import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { StyleSheet, css } from 'aphrodite';
import KitchenCard from '../components/KitchenCard'

function Kitchen() {

  const [pendentOrders, setPendentOrders] = useState([]);

  useEffect(() => {
    db.collection('Order')
      .onSnapshot((snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setPendentOrders(orders);
      })
  });

  return (
    <main className={css(styles.mainKitchen)}>
      <div>
        <div className={css(styles.pendentOrderDiv)}>
          {pendentOrders.map((ord) =>
            <KitchenCard key={ord.id}
              clientName={ord.clientName}
              tableNumber={ord.tableNumber}
              time={ord.time}
              status={ord.status}
              clientOrder={ord.clientOrder.map((item, index) => (
                <div key={index}>
                {item.count}x {item.name}
                </div>
              ))}
           />)}
        </div>
      </div>
    </main>
  );
}

const styles = StyleSheet.create({
  mainKitchen: {
    backgroundColor: '#26140A',
    padding: '10px 0 0 0',
    width: '100vw',
    height: '90.5vh',
    overflow: 'auto'    
  },
  pendentOrderDiv: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})

export default Kitchen;