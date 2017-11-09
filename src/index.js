import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import Root from './components/Root/Root';
import getRoutes from './routes';
import getStores from './stores';
import './index.css';

ReactDOM.render(
  <Provider store={getStores()}>
    <Root>
      {getRoutes()}
    </Root>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
