import React, { Component } from 'react';
import './App.css';
import Hello from './component/Hello';

class App extends Component {
state = {
  color : '#000000'
}  
  render() {   
    return (
      // <IterationExam />
      // <LifeCycleSample color={this.state.color}/>
      <Hello name="kang" />
    );
  }
}

export default App;
