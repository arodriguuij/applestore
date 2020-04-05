import React, { Component } from "react";
import ErrorPage from "../error-page/error-page";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <ErrorPage text="Something was wrong... Try again :|" />;
    else return this.props.children;
  }
}

export default ErrorBoundary;
