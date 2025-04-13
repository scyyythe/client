import React from "react";
import "../styles/Components.css";

function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder || "Search..."} value={value} onChange={onChange} />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
}

export default SearchBar;
