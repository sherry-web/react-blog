import React from 'react';

const Navbar = ({ avatar }) => (
  <nav className="navbar">
    <img src={avatar} alt="User Avatar" className="avatar" />
  </nav>
);

export default Navbar;
