import React, { Component } from 'react';

import CounterList from './counterlist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterList />
      </div>
    );
  }
}

export default App;
