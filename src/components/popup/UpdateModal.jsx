import React, { useState } from "react";
import "../../styles/Components.css";
import ErrorPopup from "./ErrorPopup";
import { motion, AnimatePresence } from "framer-motion";
const UpdateModal = ({ isOpen, onClose }) => {
  const [image, setImage] = useState(null);
  const [billName, setBillName] = useState("");
  const [descripiton, setDescription] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [participantInput, setParticipantInput] = useState("");
  const [participants, setParticipants] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const handleAddParticipant = () => {
    const trimmed = participantInput.trim();
    if (trimmed !== "") {
      setParticipants([...participants, trimmed]);
      setParticipantInput("");
    }
  };

  const handleRemoveParticipant = (indexToRemove) => {
    const updated = participants.filter((_, index) => index !== indexToRemove);
    setParticipants(updated);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const generateRandomCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCode(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (billName.trim() === "") {
      setErrorMessage("Bill name is required.");
      return;
    }

    if (generatedCode.trim() === "") {
      setErrorMessage("Please generate a code!");
      return;
    }

    if (participants.length === 0) {
      setErrorMessage("Please add at least one participant.");
      return;
    }

    setErrorMessage("");
    console.log({ image, billName, generatedCode, participants });
  };

  const handleCloseErrorPopup = () => {
    setErrorMessage("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="create-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="create-modal-box"
            initial={{ y: 0, opacity: 0, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="create-modal-overlay">
              <div className="create-modal-box">
                <p>Update Bill Details</p>
                <form className="create-modal-form" onSubmit={handleSubmit}>
                  <div className="upload">
                    <div className="image-preview" id="image-preview">
                      <label htmlFor="file-input" className="upload-box-label">
                        {!image && (
                          <>
                            <i className="fa fa-cloud-upload"></i>
                            <span>Upload Image</span>
                          </>
                        )}
                        {image && <img src={image} alt="Image Preview" />}
                      </label>
                      <input
                        type="file"
                        id="file-input"
                        accept="image/*"
                        className="file-input"
                        onChange={handleFileChange}
                      />
                    </div>

                    {image && (
                      <p className="remove-img-text" onClick={handleRemoveImage}>
                        Remove Image
                      </p>
                    )}
                  </div>

                  <div className="form-input">
                    <p>Bill Name</p>
                    <input
                      type="text"
                      placeholder="Enter bill name"
                      value={billName}
                      onChange={(e) => setBillName(e.target.value)}
                    />
                    <p>Short Description</p>
                    <textarea
                      type="text"
                      placeholder="Add a short description"
                      value={descripiton}
                      onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className="code">
                      <p>Generate Code</p>
                      <div className="btn-generate">
                        <input type="text" placeholder="Generate Code" value={generatedCode} readOnly />
                        <button type="button" onClick={generateRandomCode}>
                          Generate
                        </button>
                      </div>
                    </div>
                    <div className="add-user">
                      <p>Add participant</p>
                      <div className="input-group">
                        <input
                          type="text"
                          value={participantInput}
                          onChange={(e) => setParticipantInput(e.target.value)}
                          placeholder="Enter participant name"
                        />
                        <button type="button" onClick={handleAddParticipant}>
                          Add
                        </button>
                      </div>

                      <div className="added">
                        {participants.map((name, index) => (
                          <div className="chip" key={index}>
                            <span>{name}</span>
                            <span className="remove-x" onClick={() => handleRemoveParticipant(index)}>
                              ×
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="create-modal-submit-btn">
                    Create Bill
                  </button>
                </form>

                <button className="create-modal-close-btn" onClick={onClose}>
                  ×
                </button>
              </div>

              <ErrorPopup message={errorMessage} onClose={handleCloseErrorPopup} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpdateModal;
