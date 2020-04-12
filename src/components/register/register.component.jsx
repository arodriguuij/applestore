import React, { useState } from "react";
import FormInput from "../from-input/formInput.component";
import "./register.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

const Register = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeChangler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "email":
        setEmail(value);
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

  const resetInputs = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) alert("passwords do not match");

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      resetInputs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          onChange={onChangeChangler}
          label="display name"
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
          type="password"
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
