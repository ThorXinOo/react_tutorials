/** @format */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Navbar extends Component {
  static defaultProps = {
    title: 'Navbar',
    icon: 'fa fa-user'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
