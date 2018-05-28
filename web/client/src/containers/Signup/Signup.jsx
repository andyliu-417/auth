import React from "react";

import './Signup.css';
import SignupForm from '../../components/SignupForm/SignupForm';

class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
  return (
    <div className="signup-header">
        <SignupForm />
    </div>);
  }
}

export default Signup;
