// components/CounterButtons.jsx
import React, { Component } from 'react';

class CounterButtons extends Component {
  render() {
    return (
      <div className="counter-buttons">
        <button onClick={this.props.increment} className="button">+</button>
        <button onClick={this.props.reset} className="button reset-btn"><i class="fa-solid fa-arrows-rotate"></i></button>
        <button onClick={this.props.decrement} className="button">-</button>
       
      </div>
    );
  }
}

export default CounterButtons;
