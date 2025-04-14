import React, { useState, useRef, useEffect } from "react";

const Card = ({ category, description, date, imageUrl, onEdit, onDelete, onArchive }) => {
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

  return (
    <div className="card relative">
      <div className="card-header flex justify-between items-center">
        <h3 className="category-name">{category}</h3>
        <div className="options relative" ref={dropdownRef}>
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
