// App.jsx
import React, { Component } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      backgroundColor: "#f0f0f0", // Initial background color
    };
  }

  // Method to generate random color
  generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      backgroundColor: this.generateRandomColor(),
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0,
      backgroundColor: this.generateRandomColor(),
    });
  };

  reset = () => {
    this.setState({
      count: 0,
      backgroundColor: this.generateRandomColor(),
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">CountUp</h1>
        <div className="card" style={{ backgroundColor: this.state.backgroundColor }}>
          <CounterDisplay count={this.state.count} />
          <CounterButtons
            increment={this.increment}
            decrement={this.decrement}
            reset={this.reset}
          />
        </div>
      </div>
    );
  }
}

export default App;
