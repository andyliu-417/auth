import React from "react";

import "./Signup.css";
import SignupForm from "../../components/SignupForm/SignupForm";

class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {}

  handleChange() {}

  render() {
    return (
      <div className="signup-header">
        <SignupForm onSubmit={this.handleSubmit} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Signup;
