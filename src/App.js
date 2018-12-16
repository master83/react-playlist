import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <h1>My First react app</h1>
          <p>Welcome :)</p>
          <Ninjas name="Ryu" age="25" belt="black" />
      </div>
    );
  }
}

export default App;
