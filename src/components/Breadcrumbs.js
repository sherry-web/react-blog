import React from 'react';
import './styles//Breadcrumbs.css';

const Breadcrumbs = ({ path }) => (
  <nav className="breadcrumbs">
    <ul>
      <li><a href="/">Home</a></li>
      <li>{path}</li>
    </ul>
  </nav>
);

export default Breadcrumbs;