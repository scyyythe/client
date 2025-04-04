import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/UserHeader";
import "../../styles/UserDashboard.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import CurrencySelector from "../../components/Currency";

function ListView() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [participants, setParticipants] = useState([""]);
  const [currency, setCurrency] = useState("PHP - Philippine Peso");

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const handleBackClick = () => {
    navigate("/dashboard");
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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleParticipantChange = (index, event) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = event.target.value;
    setParticipants(updatedParticipants);
  };

  const addParticipant = () => {
    setParticipants([...participants, ""]);
  };
  const handleCreateList = () => {
    const listData = {
      title,
      currency,
      image,
      participants,
    };

    console.log("List Data Submitted:", listData);
    navigate("/send-code", { state: { listData } });
  };
  return (
    <>
      <UserHeader />
      <div className="user-dashboard-page">
        <div className="back-button">
          <button onClick={handleBackClick} className="back-btn">
            <i className="fa fa-arrow-left"></i>
          </button>
          <h3>Create New List</h3>
        </div>

        <div className="input-fields">
          <div className="upload">
            <div className="image-preview" id="image-preview">
              {!image && <i className="fa fa-plus plus-sign"></i>}
              {image && <img src={image} alt="Image Preview" />}
            </div>
            <label htmlFor="file-input" className="upload-label">
              <i className="fa fa-cloud-upload"></i> Upload Image
            </label>
            <input type="file" id="file-input" accept="image/*" className="file-input" onChange={handleFileChange} />
          </div>

          <div className="input-list-con">
            <div className="top-field">
              <InputField
                label="Bill Title"
                id="list-title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter List Title"
              />
              <div>
                <label htmlFor="currency">Select Currency</label>
                <CurrencySelector selectedCurrency={currency} onChange={handleCurrencyChange} />
              </div>
            </div>

            <div className="add-participant">
              {participants.map((participant, index) => (
                <InputField
                  key={index}
                  label={`Participant ${index + 1}`}
                  id={`participant-${index}`}
                  value={participant}
                  onChange={(e) => handleParticipantChange(index, e)}
                  placeholder="Enter Participant Name"
                />
              ))}
              <p className="add-another" onClick={addParticipant}>
                + Add another participant
              </p>
            </div>

            <Button text="Create List" className="create-list-btn" onClick={handleCreateList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListView;
