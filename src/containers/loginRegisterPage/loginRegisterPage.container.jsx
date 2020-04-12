import React, { useEffect } from "react";
import { connect } from "react-redux";
import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";
import Breadcrum from "../../components/breadcrumb/breadcrumb.component";
import { setBreadcrumb } from "../../redux/breadcrumb/breadcrumb.actions";
import "./loginRegisterPage.styless.css";

const LoginRegisterPage = ({ onSetBreadcrum }) => {
  useEffect(() => {
    onSetBreadcrum("Login / Register");
  }, [onSetBreadcrum]);

  return (
    <div className="login-register-page-container">
      <Breadcrum />
      <div className="login-register-page-content">
        <Login />
        <Register />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSetBreadcrum: (text) => dispatch(setBreadcrumb(text)),
});
export default connect(null, mapDispatchToProps)(LoginRegisterPage);
