import React from "react";
import "./formInput.styless.css";

const FormInput = ({ label, changeHandler, ...otherProps }) => {
  return (
    <div className="form-input-container">
      <input className="form-input" onChange={changeHandler} {...otherProps} />
      <label>{label}</label>
    </div>
  );
};

export default FormInput;
