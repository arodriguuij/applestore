import React, { useState } from "react";
import FormInput from "../from-input/formInput.component";
import "./register.component";
import CustomButton from "../custom-button/custom-button.component";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeChangler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(name);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    debugger;
  };

  return (
    <div className="register-container">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          name="name"
          type="text"
          value={name}
          onChange={onChangeChangler}
          label="name"
          required
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={onChangeChangler}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={onChangeChangler}
          label="password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="paswrod"
          value={confirmPassword}
          onChange={onChangeChangler}
          label="confirm password"
          required
        />
        <CustomButton type="submit">Register</CustomButton>
      </form>
    </div>
  );
};

export default Register;
