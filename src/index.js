import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import getRoutes from './routes'

const getNewStore = () => {
  const middlewares = [];
  const finalCreateStore = compose(
    ...middlewares
  )(createStore);

  return finalCreateStore(rootReducer, {});
};

ReactDOM.render(<Provider store={getNewStore()}>
    {getRoutes()}
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
