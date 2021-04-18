import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';


const Routes: React.FC = () => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </HashRouter>
);
export default Routes;
