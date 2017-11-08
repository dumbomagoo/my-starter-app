import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Root from './components/Root/Root';
import rootReducer from './reducers';
import getRoutes from './routes'
import './index.css';

const getNewStore = () => {
  const middlewares = [
    applyMiddleware(thunk)
  ];
  
  const finalCreateStore = compose(
    ...middlewares
  )(createStore);

  return finalCreateStore(rootReducer, {});
};

ReactDOM.render(
  <Provider store={getNewStore()}>
    <Root>
      {getRoutes()}
    </Root>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
