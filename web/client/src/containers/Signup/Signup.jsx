import React from "react";

import "./Signup.css";
import SignupForm from "../../components/SignupForm/SignupForm";
import Wrapper from "../../components/Wrapper/Wrapper";

@Wrapper
class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}


  render() {
    return (
      <div className="signup-header">
        <SignupForm onSubmit={this.handleSubmit} onChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Signup;
