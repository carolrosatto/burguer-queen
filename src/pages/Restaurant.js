import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { StyleSheet, css } from 'aphrodite';
import ItensCard from '../components/itensCard';
import MealTimeCard from '../components/MealTimeCard'
import Input from '../components/Input'
// import Button from '../components/Button';

function Restaurant() {
  const [menu, setMenu] = useState([]);
  const [breakfast, setBreakfast] = useState(true);
  const [client, setClient] = useState('');
  // const [table, setTable] = useState('');

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
      </div>
      <div key={menu.id} className={css(styles.menuDiv)}>
        {filterMeal().map((menuItem) =>
          <ItensCard key={menuItem.id}
            id={menuItem.id}
            onClick={() => console.log(menuItem)}
            name={menuItem.name}
            price={menuItem.price} />)
        }
        <div className={css(styles.inputs)}>
          <Input
            type='text'
            placeholder='Nome do cliente'
          />
          <Input
            type='number'
            placeholder='Mesa'
          />
        </div>
      </div>
      <div className='orderDiv'>
        <ul>
          <li></li>
        </ul>
      </div>
    </main>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#26140A'
  },

  menuDiv: {
    backgroundColor: '#43210E',
    width: '390px',
    height: '390px',
    borderRadius: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',

  },

  btnDiv: {
    display: 'flex',
    justifyContent: 'left',
  }

})

export default Restaurant;