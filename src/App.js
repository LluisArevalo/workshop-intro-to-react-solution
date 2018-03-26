import React, { Component } from 'react';
import RocketList from './Components/RocketList';
import RocketItem from './Components/RocketItem';
import './App.css';

const apiUrl = 'https://api.spacexdata.com/v2/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { spacexItems: [], currentItemId: '' };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
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
    this.setState({ currentItemId: event.target.id });
  }

  handleResetClick(event) {
    event.preventDefault();
    this.setState({ currentItemId: '' });
  }

  render() {
    const { currentItemId, spacexItems } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to SpaceX</h1>
          <img src="/images/logo.png" className="App-logo" alt="SpaceX" />
        </header>
        {
          currentItemId !== '' ? (
            <RocketItem itemId={currentItemId} handleClick={this.handleResetClick} />
          ) : (
            <RocketList spacexItems={spacexItems} handleClick={this.handleItemClick} />
          )
        }
      </div>
    );
  }
}

export default App;
