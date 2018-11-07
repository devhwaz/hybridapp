import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './component/LifeCycleSample';

class App extends Component {
state = {
  color : '#000000'
}  
  render() {   
    return (
      // <IterationExam />
      <LifeCycleSample color={this.state.color}/>
    );
  }
}

export default App;
