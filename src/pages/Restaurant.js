import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import Card from '../components/Card'


function Restaurant() {
  const [menu, setMenu] = useState([]);

  useEffect(() =>
    db.collection('Menu')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setMenu((currentState) => 
          [...currentState, doc.data()]
          );
          
          console.log(doc.data());
        });
      }),
    []);

  return (
    <div key={'menu'} className="restaurant">
      {menu.map(menuItem =>
        <Card key={menuItem.id}
          name = {menuItem.name}
      price={menuItem.price}/>)
      }
    </div>
  );
}

export default Restaurant;