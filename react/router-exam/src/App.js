import React, { Component } from 'react';

import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Navbar from './component/Navbar';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div>       
          <Navbar /> 
          <Route exact path='/' component ={Home}/>
          <Route path='/about' component ={About}/>
          <Route path='/contact' component ={Contact}/>
        </div>
     </BrowserRouter>   
    );
  }
}

export default App;
