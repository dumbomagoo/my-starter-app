import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';

const getRoutes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={AppContainer}/>
    </div>
  </BrowserRouter>
);

export default getRoutes;