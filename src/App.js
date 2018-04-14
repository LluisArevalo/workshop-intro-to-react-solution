import React, { Component } from 'react';
import RocketList from './Components/RocketList';
import RocketItem from './Components/RocketItem';
import { fetchDataCollection } from './data/index.js';
import './App.css';

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
    fetchDataCollection().then(spacexItems => this.setState({ spacexItems }));
  }

  handleItemClick(id) {
    this.setState({ currentItemId: id });
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
