import React, { Component } from 'react';

class RocketItem extends Component {
  render() {
    const { itemId, handleClick } = this.props;

    return (
      <article>
        {itemId}
        <button onClick={handleClick}>View all</button>
      </article>
    );
  }
}

export default RocketItem;
