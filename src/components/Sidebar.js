import React from 'react';
import './styles/Sidebar.css';

const Sidebar = ({ items }) => {
  if (!items) return null;
  return (
    <aside>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;