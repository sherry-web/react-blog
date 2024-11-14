import React from 'react';
import './styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="/logo.png" alt="Logo" />
      <h1>My Blog</h1>
    </div>
    <nav className="nav-links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div className="user-profile">
      <img src="/user-icon.png" alt="User" />
    </div>
  </header>
);

export default Header;