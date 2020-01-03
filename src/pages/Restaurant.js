import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { StyleSheet, css } from 'aphrodite';
import ItensCard from '../components/itensCard';
import MealTimeCard from '../components/MealTimeCard'
import Button from '../components/Button';
import Input from '../components/Input'

function Restaurant() {
  const [menu, setMenu] = useState([]);
  const [breakfast, setBreakfast] = useState(true);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('Menu')
      .get()
      .then((snapshot) => {
        const item = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setMenu(item);
      })
  }, []);

  const filterMeal = () => {
    const meal = menu.filter((item) => item.breakfast === breakfast)
    return meal;
  }

  const addProducts = (item) => {
    setProducts([...products, item]);
    
    console.log(products)
}

  // const addOrder = () => {
  //   db.collection("Order")
  //     .add({
  //       clientName: client,
  //       table: table,

  //     })
  //     .then(function (docRef) {
  //       console.log("Funcionou :D", docRef.id);
  //     })
  //     .catch(function (error) {
  //       console.error("Fudeu", error);
  //     })
  // };

  // Pra adicionar algo no firebase -> criar uma constante com o que voce ta pegando de informação, no caso o value to texto do input -> // 

  return (
    <main className={css(styles.main)}>
      <div className={css(styles.btnDiv)}>
        <MealTimeCard
          title="Café da manhã"
          onClick={() => setBreakfast(true)}
          id='breakfast' />
        <MealTimeCard
          title="Almoço"
          onClick={() => setBreakfast(false)} />
        <Input
          type='text'
          placeholder='Nome do cliente'
          onChange={event => setClient(event.target.value)} />
        <Input
          type='number'
          placeholder='Mesa'
          onChange={event => setTable(event.target.value)} />
      </div>
      <section className={css(styles.menuAndorder)}>
        <div key={menu.id} className={css(styles.menuDiv)}>
          {filterMeal().map((menuItem) =>
            <ItensCard key={menuItem.id}
              id={menuItem.id}
              onClick={addProducts}
              name={menuItem.name}
              price={menuItem.price} />)
            }
        </div>
        <div className={css(styles.orderDiv)}>
          <h2>{client} {table}</h2>
          <ul>
            {/* <li></li> */}
          </ul>
          <Button className={css(styles.cleanBtn)} title='Limpar pedido' />
          <Button className={css(styles.sendBtn)} title='Enviar pedido' />
        </div>
      </section>
    </main>
  
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#26140A',
    padding: '10px 0 0 0',
    width: '99vw',
    height: '50vh',
  },
  menuDiv: {
    backgroundColor: '#43210E',
    width: '51vw',
    height: '32vh',
    borderRadius: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  btnDiv: {
    display: 'flex',
    margin: '0 0 0 3vw'
  },
  orderDiv: {
    backgroundColor: '#43210E',
    width: '30vw',
    height: '32vh',
    borderRadius: '15px',
    padding: '10px',

  },
  menuAndorder: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  cleanBtn: {
    width: '14vw',
    height: '3vh',
    backgroundColor: '#D95204',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '80%',
    fontWeight: 'bold',
    border: 'none',
    margin: '5px'
  },
  sendBtn: {
    width: '14vw',
    height: '3vh',
    backgroundColor: '#84BF04',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '80%',
    fontWeight: 'bold',
    border: 'none',
  }
})

export default Restaurant;