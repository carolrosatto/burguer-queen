import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { StyleSheet, css } from 'aphrodite';
import KitchenCard from '../components/KitchenCard'

function Kitchen() {

  const [pendentOrders, setPendentOrders] = useState([]);
  useEffect(() => {
    db.collection('Order')
      .orderBy("startTime", "asc")
      .onSnapshot((snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setPendentOrders(orders);
      });
  }, []);

  const getFinishTime = (id) => {
    const finishTime = new Date().toLocaleString("pt-br")

    db.collection("Order")
    .doc(id)
    .update({
      finishTime: finishTime,
      status: "Finalizado"
    })
  }

  return (
    <main className={css(styles.mainKitchen)}>
      <div>
        <div className={css(styles.pendentOrderDiv)}>
          {pendentOrders
            .filter(item => item.status === "Pendente")
            .map((ord) =>
              <KitchenCard key={ord.id}
                clientName={ord.clientName}
                tableNumber={ord.tableNumber}
                time={ord.startTime}
                onClick={()=> getFinishTime(ord.id)}
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