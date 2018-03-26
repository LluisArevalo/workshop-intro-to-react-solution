import React, { Component } from 'react';

class RocketList extends Component {
  loadItems() {
    const { spacexItems, handleClick } = this.props;
    const items = [];

    spacexItems.forEach(item => {
      items.push(
        <article key={item.id} id={item.id} onClick={handleClick}>
          {item.name}
        </article>
      );
    });

    return items;
  }

  render() {
    return (
      <section>
        {this.loadItems()}
      </section>
    );
  }
}

export default RocketList;
