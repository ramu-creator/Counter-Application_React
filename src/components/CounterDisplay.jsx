// components/CounterDisplay.jsx
import React, { Component } from 'react';

class CounterDisplay extends Component {
  render() {
    return (
      <div className="counter-display">
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}
export default CounterDisplay;
