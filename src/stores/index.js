
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const getStores = () => {
  const middlewares = [
    applyMiddleware(thunk)
  ];
  
  const finalCreateStore = compose(
    ...middlewares
  )(createStore);

  return finalCreateStore(rootReducer, {});
};

export default getStores;