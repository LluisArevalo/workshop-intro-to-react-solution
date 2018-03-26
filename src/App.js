import React, { Component } from 'react';
import RocketList from './Components/RocketList';
import './App.css';

const apiUrl = 'https://api.spacexdata.com/v2/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { spacexItems: [], rocketId: '' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    const rocketsReq = fetch(`${apiUrl}rockets`).then(response => response.json());
    const capsulesReq = fetch(`${apiUrl}capsules`).then(response => response.json());

    Promise.all([rocketsReq, capsulesReq]).then(([rockets, capsules]) => {
      const spacexItems = rockets.concat(capsules);
      this.setState({ spacexItems });
    });
  }

  handleItemClick(event) {
    this.setState({ rocketId: event.target.id });
  }

  render() {
    const { rocketId, spacexItems } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to SpaceX</h1>
          <img src="/images/logo.png" className="App-logo" alt="SpaceX" />
        </header>
        {
          rocketId !== '' ? (
            rocketId
          ) : (
            <RocketList spacexItems={spacexItems} handleClick={this.handleItemClick} />
          )
        }
      </div>
    );
  }
}

export default App;
