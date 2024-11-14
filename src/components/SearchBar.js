import React from 'react';
import './styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for posts..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
