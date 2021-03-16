import React from "react";
import "./ErrorWrapper.css";

class ErrorWrapper extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      window.location.reload();

      return (
        <div className="error">
          <h2>OOPS...Something went wrong!!</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorWrapper;
