import React from "react";
import "../styles/Components.css";

const Modal = ({ showModal, actionType, onConfirm, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Are you sure you want to {actionType}?</p>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
