import React, { Component } from 'react';
import RocketList from './Components/RocketList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rocketId: '' };
  }

  render() {
    const { rocketId } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to SpaceX</h1>
          <img src="/images/logo.png" className="App-logo" alt="SpaceX" />
        </header>
        {
          rocketId !== '' ? 'Rocket information' : <RocketList />
        }
      </div>
    );
  }
}

export default App;
