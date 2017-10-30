import React from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import './Header.css'

const Header = props => {
  const {
    name = 'You'
  } = props;

  return (
    <div className={'header'}>
      <h1>{`Welcome ${name}`}</h1>
      <HeaderButton label={'Home'} />
      <HeaderButton label={'Profile'} path={'/profile'}/>
    </div>
  );
};

export default Header;