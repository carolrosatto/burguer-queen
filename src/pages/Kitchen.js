// import React, { useState, useEffect } from 'react';
// import { db } from '../utils/firebase';
// import { StyleSheet, css } from 'aphrodite';
// import KitchenCard from '../components/KitchenCard'

// function Kitchen () {

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

//   return (
//     <main className={css(styles.mainKitchen)}>
//     <div>
//         <KitchenCard />
//     </div>
//     </main>
//   );
// }

// const styles = StyleSheet.create({
//   mainKitchen: {
//     backgroundColor: '#26140A',
//     padding: '10px 0 0 0',
//     width: '99vw',
//     height: '60vh',
//   }
// })

// export default Kitchen;