import React, { useRef, useEffect } from "react";

const ExpenseCard = ({
  isActive,
  onToggle,
  onEdit,
  onDelete,
  onArchive,
  title = "Dinner",
  paidBy = "Angel Canete",
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isActive) {
          onToggle(); // Close dropdown if clicked outside
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive, onToggle]);

  return (
    <div className="unique-card-expense">
      <div className="unique-head-exp">
        <h4 className="unique-expense-title">{title}</h4>
        <div className="unique-options" ref={dropdownRef}>
          <button className="unique-options-btn" onClick={onToggle}>
            •••
          </button>
          {isActive && (
            <ul className="unique-options-menu">
              <li onClick={onEdit}>Edit</li>
              <li onClick={onDelete}>Delete</li>
              <li onClick={onArchive}>Archive</li>
            </ul>
          )}
        </div>
      </div>

      <div className="amount">
        <p>
          <small>Total Amount </small> <br />P <span>2000.00</span>
          <br /> <small> Paid by {paidBy}</small>
        </p>
      </div>

      <div className="button-pay">
        <button>Pay</button>
      </div>
    </div>
  );
};

export default ExpenseCard;
