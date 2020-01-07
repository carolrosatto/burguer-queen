import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import firebase from 'firebase/app';
import { StyleSheet, css } from 'aphrodite';
import ItensCard from '../components/itensCard';
import MealTimeCard from '../components/MealTimeCard';
import Button from '../components/Button';
import Input from '../components/Input';
import { FiXCircle } from "react-icons/fi";

function Restaurant() {
  const [menu, setMenu] = useState([]);
  const [breakfast, setBreakfast] = useState(true);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [order, setOrder] = useState([]);
  const [bill, setBill] = useState(0);

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

  const addProducts = (menuItem) => {
    if (order.includes(menuItem)) {
      menuItem.count++;
      setBill(+(bill + menuItem.price * menuItem.count));
    } else {
      menuItem.count = 1;
      setOrder([...order, menuItem]);
    }
    setBill(+(bill + menuItem.price));
  }

  const deleteProducts = (item) => {
    if (item.count === 1) {
      const delPrice = bill - item.price;
      const itemIndex = order.indexOf(item);
      order.splice(itemIndex, 1);
      setOrder([...order]);
      setBill(delPrice);
    } else {
      item.count--;
      const delPrice = bill - item.price;
      setBill(delPrice);
    }
  }

  const sendOrder = () => {
    db.collection('Order')
      .add({
        clientName: client,
        tableNumber: table,
        clientOrder: order,
        totalBill: bill,
        status: 'Pendente',
        time: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setOrder([]);
        setTable(['']);
        setClient(['']);
        setBill(0);
      })
    console.log('Enviado');
  }

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
              onClick={() => addProducts(menuItem)}
              name={menuItem.name}
              price={menuItem.price}
              options={menuItem.options}
              extra={menuItem.extra}
            />)
          }
        </div>
        <div className={css(styles.orderDiv)}>
          <h2>{client} {table}</h2>
          <div>
            {order.map(item =>
              <p key={item.id}> {item.count}x {item.name} R${item.price} <FiXCircle color='#D95204' onClick={() => deleteProducts(item)} /></p>)}
            <div><p>Total: R$ {bill} </p></div>
          </div>
          <div className={css(styles.sendBtnDiv)}>
            <Button className={css(styles.sendBtn)} title='Enviar pedido' onClick={(e) => { e.preventDefault(); sendOrder() }} />
          </div>
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
    height: '60vh',
  },
  menuDiv: {
    backgroundColor: '#43210E',
    width: '51vw',
    height: '43vh',
    borderRadius: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  btnDiv: {
    display: 'flex',
    margin: '0 0 1vh 3vw',
    alignItems: 'center',
  },
  orderDiv: {
    backgroundColor: '#43210E',
    color: '#D9A273',
    fontFamily: 'Lato, sans-serif',
    width: '30vw',
    height: '43vh',
    borderRadius: '15px',
    padding: '10px',
  },
  menuAndorder: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  sendBtn: {
    width: '15vw',
    height: '4vh',
    backgroundColor: '#84BF04',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '90%',
    fontWeight: 'bold',
    border: 'none',
  },
  sendBtnDiv: {
    display: 'flex',
    justifyContent: 'center'
  }
})


export default Restaurant;