import React, { Component } from 'react';
import Title from './Title';
import './RocketItem.css';
import { fetchDataItem } from '../data/';

class RocketItem extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { itemId } = this.props;

    fetchDataItem(itemId).then(item => {
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
        <img src={`/images/${item.id}.jpg`} alt={item.name} />
        {this.getDetails(item, item.type)}
        <button onClick={handleClick}>View all</button>
      </section>
    );
  }

  getDetails(data, type) {
    return (
      type === 'rocket' ? (
        <div>
          <Title text={data.name} />
          <p>{data.description}</p>
          <h3>Details</h3>
          <p><b>Height</b> {data.height.meters} m.</p>
          <p><b>Diameter</b> {data.diameter.meters} m.</p>
          <p><b>Mass</b> {data.mass.kg} kg.</p>
        </div>
      ) : (
        <div>
          <Title text={data.name} />
          <h3>Details</h3>
          <p><b>Height (with trunk)</b> {data.height_w_trunk.meters} m.</p>
          <p><b>Diameter</b> {data.diameter.meters} m.</p>
          <p><b>Crew capacity</b> {data.crew_capacity} people</p>
        </div>
      )
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <article className="item-container">
        { loading ? this.getLoading() : this.getInformation() }
      </article>
    );
  }
}

export default RocketItem;
