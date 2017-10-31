import React from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import './Header.css'

const Header = ({ name }) => (
  <div className={'header'}>
    <h1>{`Welcome ${name || 'You'}`}</h1>
    <HeaderButton label={'Home'} />
    <HeaderButton label={'Profile'} path={'/profile'}/>
  </div>
);

Header.defaultProps = {
  name: ''
};

export default Header;