import React from 'react';
import Restaurant from './pages/Restaurant';
import Kitchen from './pages/Kitchen';
import Deliver from './pages/Deliver'
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'><Restaurant title='Menu' /></Route>
        <Route path='/cozinha'><Kitchen title='Pedidos' /></Route>
        <Route path='/entrega'><Deliver title='Entregas' /></Route>
      </Switch>
    </Router>
  );
}

export default App;
