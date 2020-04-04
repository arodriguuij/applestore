import React, { Component } from "react";
import ErrorPage from "../error-page/error-page";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <ErrorPage />;
    else return this.props.children;
  }
}

export default ErrorBoundary;
