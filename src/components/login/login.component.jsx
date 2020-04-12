import React, { useState } from "react";
import FromInput from "../from-input/formInput.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import "./login.component";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetInputs = () => {
    setEmail("");
    setPassword("");
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetInputs();
    } catch (error) {
      console.log(error);
    }
  };

  const clickGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };
  return (
    <div className="login-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FromInput
          name="email"
          value={email}
          type="email"
          label="email"
          required
          changeHandler={onChangeHandler}
        />
        <FromInput
          name="password"
          value={password}
          type="password"
          label="password"
          required
          changeHandler={onChangeHandler}
        />
        <div className="login-buttons">
          <CustomButton type="submit">Login</CustomButton>
          <button onClick={clickGoogle}>Login with Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
