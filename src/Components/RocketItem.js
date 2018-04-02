import React, { Component } from 'react';
import './RocketItem.css';

const apiUrl = 'https://api.spacexdata.com/v2/';
const capsules = ['dragon1', 'dragon2', 'crewdragon'];

class RocketItem extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { itemId } = this.props;
    const isCapsule = capsules.indexOf(itemId) >= 0;
    const url = `${apiUrl}${ isCapsule ? 'capsules' : 'rockets'}/${itemId}`;
    fetch(url)
      .then(response => response.json())
      .then(item => {
        this.setState({
          item,
          loading: false
        })
      });
  }

  getLoading() {
    const { handleClick } = this.props;
    return <button onClick={handleClick}>View all</button>;
  }

  getInformation() {
    const { handleClick } = this.props;
    const { item } = this.state;

    return (
      <section className="information">
        <img src={`/images/${item.id}.jpg`} />
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <button onClick={handleClick}>View all</button>
        </div>
      </section>
    );
  }

  render() {
    const { loading } = this.state;
    const { handleClick } = this.props;

    return (
      <article className="item-container">
        { loading ? this.getLoading() : this.getInformation() }
      </article>
    );
  }
}

export default RocketItem;
