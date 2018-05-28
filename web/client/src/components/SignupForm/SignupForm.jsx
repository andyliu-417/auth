import React from "react";

import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <div className="card-panel signup-panel">
          <form className="col s12" action="/" onSubmit={this.props.onSubmit}>
            <h4 className="center-align">Signup</h4>

            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  id="email"
                  type="email"
                  name="email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="confirm_password"
                  type="password"
                  name="confirm_password"
                  className="validate"
                />
                <label htmlFor="confirm_password">Conform Password</label>
              </div>
            </div>

            <div className="row right-align">
              <input
                type="submit"
                className="waves-effect waves-light btn indigo lighten-1"
                value="Sign up"
              />
            </div>

            <div className="row">
              <p className="right-align">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
