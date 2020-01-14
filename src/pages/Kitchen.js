import React from 'react';
// import { db } from '../utils/firebase';
import { StyleSheet, css } from 'aphrodite';
// import KitchenCard from '../components/KitchenCard'

function Kitchen() {

  // const [pendentOrders, setPendentOrders] = useState([]);

  //   useEffect(() => {
  //     db.collection('Order')
  //       .get()
  //       .then((snapshot) => {
  //         const orders = snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data()
  //         }))
  //         setOrders(orders);
  //       })
  //   }, []);

  return (
    <main className={css(styles.mainKitchen)}>
      <div>
        <h1 className={css(styles.kitchenH1)}>Em breve :)</h1>
        {/* <KitchenCard /> */}
      </div>
    </main>
  );
}

const styles = StyleSheet.create({
  mainKitchen: {
    backgroundColor: '#26140A',
    padding: '10px 0 0 0',
    width: '100vw',
    height: '60vh',
  },
  kitchenH1: {
    color: '#D9A273',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 'bold',
    marginLeft: '30px'
  }
})

export default Kitchen;