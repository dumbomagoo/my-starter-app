import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Container
import HeaderContainer from '../../containers/HeaderContainer';
import FooterContainer from '../../containers/FooterContainer';

const Root = ({ children }) => {
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        {children}
        <FooterContainer />
      </div>
    </BrowserRouter>
  );
};

export default Root;