/** @format */

import React from 'react';
import PropTypes from 'prop-types';
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Navbar',
  icon: 'fa fa-user',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
export default Navbar;
