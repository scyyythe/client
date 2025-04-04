import React from "react";
import PropTypes from "prop-types";
import "../styles/Components.css";

const InputField = ({ label, type, id, value, onChange, placeholder }) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} id={id} value={value} onChange={onChange} placeholder={placeholder} className="input" />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  label: "",
  placeholder: "",
};

export default InputField;
