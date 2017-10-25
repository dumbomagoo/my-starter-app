import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const getNewStore = () => {
  const middlewares = [];
  const finalCreateStore = compose(
    ...middlewares
  )(createStore);

  return finalCreateStore(rootReducer, {});
};

ReactDOM.render(<AppContainer store={getNewStore()}/>, document.getElementById('root'));
registerServiceWorker();
