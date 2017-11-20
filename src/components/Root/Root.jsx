import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Containers
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../Footer/Footer';

const Root = ({ children }) => {
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        {children}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Root;