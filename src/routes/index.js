import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import Favorites from '../components/Favorites/Favorites';

const getRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/hello"/>
      </Route>
      <Route path="/hello" component={AppContainer}/>
      <Route path="/profile" component={Favorites}/>
    </Switch>
  </BrowserRouter>
);

export default getRoutes;