import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Containers
import AppContainer from '../containers/AppContainer';
import FavoritesContainer from '../containers/FavoritesContainer';

const getRoutes = () => (
    <Switch>
      <Route exact path="/">
        <Redirect to="/hello"/>
      </Route>
      <Route path="/hello" component={AppContainer}/>
      <Route path="/profile" component={FavoritesContainer}/>
    </Switch>
);

export default getRoutes;