import React from 'react';
import Restaurant from './pages/Restaurant';
import Kitchen from './pages/Kitchen';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path='/'><Restaurant title='Menu' /></Route>
          <Route path='/cozinha'><Kitchen title='Pedidos' /></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
