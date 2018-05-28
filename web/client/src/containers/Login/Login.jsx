import React from "react";

import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import Wrapper from "../../components/Wrapper/Wrapper";

@Wrapper
class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  render() {
    return (
      <div className="login-header">
        <LoginForm onSubmit={this.handleSubmit} onChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Login;
