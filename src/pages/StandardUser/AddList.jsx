import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/UserHeader";
import "../../styles/UserDashboard.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
function ListView() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(""); // Add a state for the title

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
          <InputField
            label="List Title"
            id="list-title"
            value={title} // Bind the input value to the state
            onChange={handleTitleChange} // Handle the input change
            placeholder="Enter List Title" // Set a string as the placeholder
          />
          <Button text="Create List" className="create-list-btn" onClick={() => alert("List Created!")} />
        </div>
      </div>
    </>
  );
}

export default ListView;
