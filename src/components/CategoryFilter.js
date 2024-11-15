import React from 'react';
import './styles/CategoryFilter.css';

const CategoryFilter = ({ categories, onFilterSelect }) => (
  <div className="category-filter">
    <select onChange={e => onFilterSelect(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;