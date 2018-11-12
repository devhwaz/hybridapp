import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './compoment/Counter';
import CounterContainer from './container/CounterContainer';

class App extends Component {
  render() {
    return (
      <CounterContainer />
    );
  }
}

export default App;
