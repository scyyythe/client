import React, { useState, useRef, useEffect } from "react";

const Card = ({ category, description, date, imageUrl, onEdit, onDelete, onArchive, onClick }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCardClick = (e) => {
    if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
      return;
    }
    onClick?.();
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-header">
        <h3 className="category-name">{category}</h3>
        <div className="options" ref={dropdownRef}>
          <button className="options-btn" onClick={() => setShowOptions(!showOptions)}>
            •••
          </button>
          {showOptions && (
            <ul className="options-menu">
              <li onClick={onEdit}>Edit</li>
              <li onClick={onDelete}>Delete</li>
              <li onClick={onArchive}>Archive</li>
            </ul>
          )}
        </div>
      </div>

      {imageUrl && <img src={`./images/${imageUrl}`} alt={category} className="card-image" />}
      <p className="description">{description}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default Card;
