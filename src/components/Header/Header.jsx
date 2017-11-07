import React from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import './Header.scss'

const Header = ({ name }) => (
  <div className={'header'}>
    <span className='menu-icon' />
    <h1>{`Welcome ${name || 'You'}`}</h1>
    <div className='menu-wrapper'>
      <span className='menu-close-icon' />
      <HeaderButton label={'Home'} />
      <HeaderButton label={'Profile'} path={'/profile'}/>
    </div>
  </div>
);

Header.defaultProps = {
  name: ''
};

export default Header;