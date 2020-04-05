/** @format */

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    console.log(res.data);

    this.setState({
      loading: false,
      users: res.data,
    });
  }
  render() {
    // const numbers = [1, 2, 3];
    return (
      <div className='App'>
        {/* <Navbar /> */}
        {/* <Navbar title={numbers} icon={numbers} /> */}
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
