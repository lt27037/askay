import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';

import './styles/App.scss';

const App = () => (
  <div className="appContainer">
    <Router>
      <Header />
      <Switch>

        <Route path={['/', '/oferta', '/o-nas', '/kontakt']} exact>
          <Home />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

      </Switch>
    </Router>
  </div>
);

export default App;
