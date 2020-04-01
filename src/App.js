/** @format */

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    // const numbers = [1, 2, 3];
    return (
      <div className='App'>
        {/* <Navbar /> */}
        {/* <Navbar title={numbers} icon={numbers} /> */}
        <Navbar title='Github Finder' icon='fab fa-github' />
      </div>
    );
  }
}

export default App;
