import React from "react";
import UserHeader from "../../components/UserHeader";
import { useNavigate } from "react-router-dom";

function ListView() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <UserHeader />
      <div className="user-dashboard-page">
        <div className="back-button">
          <button onClick={handleBackClick} className="back-btn">
            <i className="fa fa-arrow-left"></i>
          </button>
          <h3>Bill Information</h3>
        </div>
        <div className="list-view-content">
          <div className="image-bill">
            <img src="/images/food.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListView;
