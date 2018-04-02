import React, { Component } from 'react';
import './RocketList.css';

class RocketList extends Component {
  loadItems() {
    const { spacexItems, handleClick } = this.props;
    const items = [];

    spacexItems.forEach(item => {
      items.push(
        <article className="card" key={item.id} id={item.id} onClick={() => handleClick(item.id)}>
          <div className="img-container">
            <img src={`/images/${item.id}.jpg`} alt={item.name} />
          </div>

          <label>
            {item.name}
          </label>
        </article>
      );
    });

    return items;
  }

  render() {
    return (
      <section className="cards-container">
        {this.loadItems()}
      </section>
    );
  }
}

export default RocketList;
