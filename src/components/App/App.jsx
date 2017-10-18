import React, { Component } from 'react';
import logo from '../../logo.svg';
import Hello from '../Hello/Hello';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'there'};

    this.help = this.help.bind(this);
  }

  help(event){
    console.log(`HELP`);
    const value = event.target.value || 'there';
    this.setState({value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" onChange={this.help}/>
        <Hello name={this.state.value}></Hello>
      </div>
    );
  }
}

export default App;
