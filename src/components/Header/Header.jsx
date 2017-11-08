import React from 'react';
import classnames from 'classnames';

import HeaderButton from '../HeaderButton/HeaderButton';
import './Header.scss'

const Header = ({ name, isMenuOpen, toggleMenu }) => {

  // Dynamicall add menu-open class depending on whether the user attempted to open the menu.
  const menuClasses = classnames('menu-wrapper', { 'menu-open': isMenuOpen });

  return (
    <div className={'header'}>
      <span onClick={toggleMenu} className='menu-icon' />
      <h1>{`Welcome ${name || 'You'}`}</h1>
      <div className={menuClasses}>
          <span onClick={toggleMenu} className='menu-close-icon' />
          <HeaderButton label={'Home'} />
          <HeaderButton label={'Profile'} path={'/profile'}/>
      </div>
    </div>
)};

Header.defaultProps = {
  isMenuOpen: false,
  name: '',
  toggleMenu: () => {}
};

export default Header;