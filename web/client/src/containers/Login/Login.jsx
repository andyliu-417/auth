import React from "react";

import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import Wrapper from "../../components/Wrapper/Wrapper";

@Wrapper
class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {}

  handleChange() {}

  render() {
    return (
      <div className="login-header">
        <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Login;
