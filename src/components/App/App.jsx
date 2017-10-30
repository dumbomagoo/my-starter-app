import React from 'react';
//import logo from '../../logo.svg';
import Hello from '../Hello/Hello';
import InputBox from '../InputBox/InputBox';
import Header from '../Header/Header'
import './App.css';

const App = ({ changeName, visitorInfo }) => {
  return (
    <div className="App">
      <Header name={visitorInfo.name} />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <InputBox callMeMaybe={changeName} />
      <Hello name={visitorInfo.name}></Hello>
    </div>
  );
}

export default App;
