import React from "react";
import "./form-input.styles.css";

const FormInput = ({
  label,
  changeHandler,
  readOnly,
  error,
  ...otherProps
}) => (
  <div className="form-input-container">
    <input
      className="form-input"
      onChange={changeHandler}
      readOnly={readOnly}
      {...otherProps}
    />
    <span className="error">{error}</span>
    <label className="label">{label}</label>
  </div>
);

export default FormInput;
