import React from 'react';

// Components
import Hello from '../Hello/Hello';
import NameInputBox from '../NameInputBox/NameInputBox';
import VisitorInfo from '../VisitorInfo/VisitorInfo';

// CSS
import './App.scss';

const App = ({ changeName, visitorInfo }) => (
  <div className="App">
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
