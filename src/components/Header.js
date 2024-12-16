import React from 'react';
import './styles/Header.css'; // Import the header's modern styles
import logo from './assets/images/logo.svg'; // Assuming the logo and avatar icons are located here
import avatarIcon from './assets/images/icons/avatar.svg';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Logo" className="logo-img" /> {/* Correcting logo class */}
    </div>
    <nav className="nav-links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div className="user-profile">
      <img src={avatarIcon} alt="User" className="avatar-img" /> {/* Correcting avatar class */}
    </div>
  </header>
);

export default Header;
