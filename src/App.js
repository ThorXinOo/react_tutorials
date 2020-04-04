/** @format */

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import './App.css';

class App extends Component {
  render() {
    // const numbers = [1, 2, 3];
    return (
      <div className='App'>
        {/* <Navbar /> */}
        {/* <Navbar title={numbers} icon={numbers} /> */}
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
