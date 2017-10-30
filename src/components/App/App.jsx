import React from 'react';
//import logo from '../../logo.svg';
import Hello from '../Hello/Hello';
import InputBox from '../InputBox/InputBox';
import Header from '../Header/Header'
import VisitorInfo from '../VisitorInfo/VisitorInfo';
import './App.css';

const App = ({ changeName, visitorInfo }) => {
  return (
    <div className="App">
      <Header name={visitorInfo.name} />
      <InputBox callMeMaybe={changeName} />
      <Hello name={visitorInfo.name}></Hello>
      <VisitorInfo info={visitorInfo} />
    </div>
  );
}

export default App;
