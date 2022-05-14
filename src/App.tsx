import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { history } from './core';
import MiniDrawer from './layouts/MiniDrawer';
import { Home, Attorney } from './processes';

function App() {

  return (
    <Router history={history}>
      <Switch>
        <MiniDrawer>
          <Route path="/" exact component={Home} />
          <Route path="/attorney" component={Attorney} />
        </MiniDrawer>
      </Switch>
    </Router>
  );
}

export default App;
