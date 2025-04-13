import React from "react";
import InputField from "./InputField";
function Settings() {
  return (
    <div className="settings-con">
      <h3>Account Settings</h3>
      <p>Manage your account details, privacy options, and application preferences.</p>

      <div className="name">
        <div className="first">
          <label htmlFor="firstname">First Name</label>
          <br />
          <InputField type="text" value="Angel" id="firstname" onChange={() => {}} />
        </div>
        <div className="last">
          <label htmlFor="lastname">Last Name</label>
          <br />
          <InputField type="text" value="Canete" id="lastname" onChange={() => {}} />
        </div>
      </div>

      <div className="email">
        <label htmlFor="email">Email Address </label>
        <br />
        <div className="email-input">
          <p>
            Your email address is <b>caneteangel187@gmail.com</b>
          </p>
          <a href="change">Change</a>
        </div>
      </div>

      <div className="password">
        <label htmlFor="password">Password</label>
        <InputField type="text" value="password" id="password" onChange={() => {}} />
        <p>
          Can't remember your current password? <a href="/reset">Reset your password</a>
        </p>
        <button className="save-changes">Save Changes</button>
      </div>

      <div className="delete">
        <h3>Delete Account</h3>
        <p>
          Would you like to delete your account?
          <br />
          This account containes 50 expenses. Deleting your account will <br /> remove all the content associated with
          it.
        </p>
        <a href="delete" className="delete-account">
          I want to delete my account
        </a>
      </div>
    </div>
  );
}

export default Settings;
