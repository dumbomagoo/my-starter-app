import React, { Component } from 'react';
import classnames from 'classnames';

// Components
import HeaderButton from './HeaderButton/HeaderButton';

// CSS
import './Header.scss'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };

  render() {
    const { name } = this.props;
    const { isMenuOpen } = this.state;

    // Dynamically add menu-open class depending on whether the user attempted to open the menu.
    const menuClasses = classnames('menu-wrapper', { 'menu-open': isMenuOpen });

    return (
      <div className={'header'}>
        <span onClick={this.toggleMenu} className='menu-icon' />
        <h1>{`Welcome ${name || 'You'}`}</h1>
        <div className={menuClasses}>
          <span onClick={this.toggleMenu} className='menu-close-icon' />
          <HeaderButton label={'Home'} onClickAction={this.toggleMenu}/>
          <HeaderButton label={'Profile'} path={'/profile'} onClickAction={this.toggleMenu}/>
        </div>
      </div>
    )
  }
}

Header.defaultProps = {
  isMenuOpen: false,
  name: '',
  toggleMenu: () => {}
};