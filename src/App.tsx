import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { history } from './core/helpers/history';
import MainLayout from './layouts/MainLayout';
import { LabTabs } from './pages';
import ListAttorney from './processes/Attorney/ListAttorney';
import AttorneyBase from './processes/Attorney/Base/AttorneyBase';

function App() {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={() => <div>Login</div>} />
        <MainLayout>
          <Route path="/" exact component={LabTabs} />
          <Route exact path="/attorneys" component={ListAttorney} />
          <Route path="/attorneys/base" component={AttorneyBase} />
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
