import React from 'react';
import './styles/Header.css';
import logo from './assets/images/logo.svg';
import avatarIcon from './assets/images/icons/avatar.svg';

const Header = () => (
  <header className="header">
    <div className="logo">
    <img src={logo} alt="Logo" className="logo" />
    </div>
    <nav className="nav-links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div className="user-profile">
      <img src={avatarIcon} alt="User" className="avatar" />
    </div>

  </header>
);

export default Header;