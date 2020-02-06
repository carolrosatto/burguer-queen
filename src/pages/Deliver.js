import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { StyleSheet, css } from 'aphrodite';
import DeliverCard from '../components/DeliverCard'

function Deliver() {
  const [finishedOrders, setfinishedOrders] = useState([]);
  useEffect(() => {
    db.collection('Order')
      .orderBy("startTime", "asc")
      .onSnapshot((snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setfinishedOrders(orders);
      });
  }, []);

  const deliverOrder = (id) => {
    db.collection("Order")
      .doc(id)
      .update({
        status: "Entregue"
      })
  }

  return (
    <main className={css(styles.mainDeliver)}>
      <div>
        <div className={css(styles.pendentDeliverDiv)}>
          {finishedOrders
            .filter(item => item.status === "Finalizado")
            .map((ord) =>
              <DeliverCard key={ord.id}
                clientName={ord.clientName}
                tableNumber={ord.tableNumber}
                time={ord.startTime}
                onClick={() => deliverOrder(ord.id)}
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
  mainDeliver: {
    backgroundColor: '#26140A',
    padding: '10px 0 0 0',
    width: '100vw',
    height: '90.5vh',
  },
  pendentDeliverDiv: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  deliverTitle: {
    color: '#D9A273',
    fontFamily: 'Lato, sans-serif',
    marginLeft: '1vw'
  }
})

export default Deliver;