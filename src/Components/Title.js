import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { text } = this.props;
    return <h2>{text}</h2>;
  }
}

export default Title;
