import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
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
  const [modal, setModal] = useState({ status: false });
  const [options, setOptions] = useState('');
  const [extra, setExtra] = useState('');

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
  const verifyOptions = (menuItem) => {
    if (menuItem.options.length !== 0) {
      setModal({ status: true, item: menuItem });
    } else {
      addProducts(menuItem);
    }
  };
  const addOptions = () => {
    if (extra !== '') {
      const updatedItem = {
        ...modal.item,
        price: modal.item.price + 1,
        name: `${modal.item.name} ${options} com ${extra}`
      };
      addProducts(updatedItem);
      setModal({ status: false })
    } else {
      const updatedItem = {
        ...modal.item,
        name: `${modal.item.name} ${options} com ${extra}`
      };
      addProducts(updatedItem);
      setModal({ status: false })
    }
  }
  const sendOrder = () => {
    if (order.length && client && table) {
      db.collection('Order')
        .add({
          clientName: client,
          tableNumber: table,
          clientOrder: order,
          totalBill: bill,
          status: 'Pendente',
          time: new Date().toLocaleString('pt-BR'),
        })
        .then(() => {
          setOrder([]);
          setTable(['']);
          setClient(['']);
          setBill(0);
        })
    } else if (!client) {
      alert("Insira o cliente")
    } else if (!table) {
      window.alert("Insira a mesa")
    } else if (!order.length) {
      window.alert("Insira algo ao pedido")
    }
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
        <div className={css(styles.menuDiv)}>
          <div className={css(styles.itensDiv)}>
            {filterMeal().map((menuItem, index) =>
              <ItensCard key={index}
                id={menuItem.id}
                onClick={() => verifyOptions(menuItem)}
                name={menuItem.name}
                price={menuItem.price}
                options={menuItem.options}
                extra={menuItem.extra}
              />)
            }
          </div>

          {modal.status ? (
            <section className={css(styles.modalDiv)}>
              <div className={css(styles.optionsDiv)}>
                <h3 className={css(styles.modalTitle)} >Extras</h3>
                {modal.item.extra.map((extras, index) => (
                  <div className={css(styles.radioText)} key={index} >
                    <input onChange={() => setExtra(extras)}
                      type='radio'
                      name='extra'
                      value={extras.value}
                      checked={extras === extra} />
                    <label>{extras}</label>
                  </div>
                ))}</div>
              <div className={css(styles.optionsDiv)}>
                <h3 className={css(styles.modalTitle)}>Opções</h3>
                {modal.item.options.map((elem, index) => (
                  <div className={css(styles.radioText)} key={index} >
                    <input onChange={() => setOptions(elem)}
                      type='radio'
                      name='options'
                      value={elem.value}
                      checked={elem === options} />
                    <label>{elem}</label>
                  </div>
                ))}
              </div>
              <Button className={css(styles.addBtn)} onClick={addOptions} title="Adicionar" />
            </section>
          ) : false}
        </div>

        <div className={css(styles.orderDiv)}>
          <h2>{client} {table}</h2>
          <div>
            {order.map(item =>
              <p key={item.id}> {item.count}x {item.name} - R$ {item.price},00 <FiXCircle color='#D95204' onClick={() => deleteProducts(item)} /></p>)}
            <p>{"Total: R$" + bill + ",00"}</p>
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
    width: '100vw',
    height: '90.5vh',
  },
  menuDiv: {
    backgroundColor: '#43210E',
    width: '55vw',
    height: '72vh',
    borderRadius: '15px',
    padding: '10px',
  },
  itensDiv: {
    width: '55vw',
    height: '48vh',
    display: 'flex',
    flexWrap: 'wrap',
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
    fontWeight: 'bold',
    fontSize: '140%',
    width: '32vw',
    height: '72vh',
    borderRadius: '15px',
    padding: '10px',
    overflow: 'auto'
  },
  menuAndorder: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  sendBtn: {
    width: '15vw',
    height: '6vh',
    backgroundColor: '#84BF04',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '80%',
    fontWeight: 'bold',
    border: 'none',
  },
  sendBtnDiv: {
    display: 'flex',
    justifyContent: 'center'
  },
  modalDiv: {
    backgroundColor: '#D95204',
    width: '55vw',
    height: '23vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'initial',
    justifyContent: 'space-around',
    borderRadius: '5px'
  },
  modalTitle: {
    color: '#D9A273',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif',
    fontSize: '150%',
    margin: '10px'
  },
  optionsDiv: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px',
  },
  addBtn: {
    width: '14vw',
    height: '6vh',
    backgroundColor: '#84BF04',
    borderRadius: '5px',
    fontFamily: 'Lato, sans-serif',
    fontSize: '120%',
    fontWeight: 'bold',
    border: 'none',
    margin: 'auto'
  },
  radioText: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 'bold',
    fontSize: '120%',
    margin: '5px'
  }
})


export default Restaurant;