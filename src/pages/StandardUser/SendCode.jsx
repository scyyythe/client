import React from "react";
import UserHeader from "../../components/UserHeader";
import "../../styles/UserDashboard.css";

function ViewDashboard() {
  return (
    <>
      <UserHeader />
      <div className="user-dashboard-page">
        <div className="info-container">
          <h3>Share this code with your friends</h3>
        </div>
      </div>
    </>
  );
}

export default ViewDashboard;
