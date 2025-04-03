import React from "react";
import UserHeader from "../../components/UserHeader";
function ListView() {
  return (
    <>
      <UserHeader />
      <div className="user-dashboard-page">
        <h3>List Information</h3>
        <div className="list-view-content">
          <p>This is the List View page.</p>
        </div>
      </div>
    </>
  );
}

export default ListView;
