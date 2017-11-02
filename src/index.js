import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import getRoutes from './routes';
import getStores from './stores';
import './index.css';

ReactDOM.render(<Provider store={getStores()}>
    {getRoutes()}
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
