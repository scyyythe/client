import React from "react";

function ParticipantModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="participant-modal-overlay" onClick={onClose}>
      <div className="participant-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="involved-person">
          <div className="head-involved">
            <small>
              <b>Participants</b>
            </small>
            <button className="modal-close-btn" onClick={onClose}>
              Close
            </button>
          </div>

          <div className="participants-grid">
            <div className="display-involved">
              <p>Angel Canete</p>
              <button>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="display-involved">
              <p>Jerald Aliviano</p>
              <button>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="display-involved">
              <p>Jamaica Anuba</p>
              <button>
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantModal;
