import React from 'react';
import Hello from '../Hello/Hello';
import NameInputBox from '../NameInputBox/NameInputBox';
import Header from '../Header/Header'
import VisitorInfo from '../VisitorInfo/VisitorInfo';
import './App.scss';

const App = ({ changeName, toggleMenu, visitorInfo, menuInfo }) => (
  <div className="App">
    <Header name={visitorInfo.name} toggleMenu={toggleMenu} isMenuOpen={menuInfo.isMenuOpen} />
    <NameInputBox callMeMaybe={changeName} name={visitorInfo.name} />
    <Hello name={visitorInfo.name}></Hello>
    <VisitorInfo favorites={visitorInfo.favorites} />
  </div>
);

App.defaultProps = {
  changeName: () => {},
  toggleMenu: () => {},
  visitorInfo: {
    favorites: [],
    name: ''
  }
};

export default App;
