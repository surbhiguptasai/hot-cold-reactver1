import React from 'react';
export default class GuessCount extends React.Component{


  render() {
    return (
      <p>
        Guess #<span id="count" >{this.props.count}</span>!
      </p>
      );
  }
};

