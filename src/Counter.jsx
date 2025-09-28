import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement = () => {
    // BUG 2: Wrong way to update state
    //this.state.count++;
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
    });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;
