import React from 'react';
import Hello from '../Hello/Hello';
import NameInputBox from '../NameInputBox/NameInputBox';
import Header from '../Header/Header'
import VisitorInfo from '../VisitorInfo/VisitorInfo';
import './App.css';

const App = ({ changeName, visitorInfo }) => (
  <div className="App">
    <Header name={visitorInfo.name} />
    <NameInputBox callMeMaybe={changeName} name={visitorInfo.name} />
    <Hello name={visitorInfo.name}></Hello>
    <VisitorInfo favorites={visitorInfo.favorites} />
  </div>
);

App.defaultProps = {
  changeName: () => {},
  visitorInfo: {
    favorites: [],
    name: ''
  }
};

export default App;
