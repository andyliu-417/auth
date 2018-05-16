import React from "react";

import './Login.css';
import LoginForm from '../../components/LoginForm/LoginForm';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
  return (
    <div className="login-header">
        <LoginForm />
    </div>);
  }
}

export default Login;
