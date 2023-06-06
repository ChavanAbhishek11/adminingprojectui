import React from 'react';
import './searchbar.css';

const Searchbar = ({ handleSearch, searchTerm }) => {
  return (
    <input
      type="text"
      className="search"
      placeholder="search by name, email, or role"
      onChange={handleSearch}
      value={searchTerm}
    />
  );
};

export default Searchbar;
