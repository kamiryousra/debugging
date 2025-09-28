import React, { Component } from "react";
import Profile from "./Profile";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Debugging Checkpoint</h1>
        {/* BUG 1: Missing prop 'name' */}
        <Profile name="kamir" age={19} />

        {/* BUG 2: Counter state not updating correctly */}
        <Counter  />
      </div>
    );
  }
}

export default App;

