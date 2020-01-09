// import React, { useState } from 'react';
// import { StyleSheet, css } from 'aphrodite';
// import addProducts from '../pages/Restaurant'


// function ExtraMenu() {
//   const [options, setOptions] = useState('');
//   const [extra, setExtra] = useState('');
//   const [modal, setModal] = useState({ status: false });

//   const verifyOptions = (menuItem) => {
//     if (menuItem.options.length !== 0) {
//       setModal({ status: true, item: menuItem });
//     } else {
//       addProducts(menuItem);
//     }
//   };

//   const addOptions = () => {
//     const updatedItem = { ...modal.item, name: `${modal.item.name} ${options} ${extra}` };
//     addProducts(updatedItem);
//     setModal({ status: false })
//   }

//   return (
//     <div>
//       <h3>Extras</h3>
//       {{modal}.item.extra.map((elem, index) => (
//         <div key={index}>
//           <input onChange={() => setExtra(elem)} type='radio' name='extra' value={elem.value} />
//           <label>{elem}</label>
//         </div>
//       ))}

//       <h3>Opções</h3>
//       {modal.item.options.map((elem, index) => (
//         <div key={index}>
//           <input onChange={() => setOptions(elem)} type='radio' name='options' value={elem.value} />
//           <label>{elem}</label>
//         </div>
//       ))}
//       <button onClick={addOptions}>Adicionar</button>
//     </div>
//   )
// }

// const styles = StyleSheet.create({
//   extraDiv: {
//     backgroundColor: '#D95204',
//     width: '49vw',
//     height: '15vh',
//     borderRadius: '5px',
//     fontFamily: 'Lato, sans-serif',
//     padding: '4px',
//     margin: '7px 3px 0 3px',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'flex-start'
//   },
//   optionsTitle: {
//     color: '#D9A273',
//     fontWeight: 'bold',
//     fontSize: '110%'
//   },
//   optionsSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginLeft: '5px',

//   },
//   extrasSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginLeft: '100px'
//   },
//   radioLabel: {
//     margin: '3px'
//   }
// })


// export default ExtraMenu;