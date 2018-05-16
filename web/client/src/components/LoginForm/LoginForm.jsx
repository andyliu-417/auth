import React from "react";

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <div className="card-panel login-panel">
          <form className="col s12" action="/" onSubmit={this.props.onSubmit}>
            <h4 className="center-align">Login</h4>

            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  id="email"
                  type="email"
                  name="email"
                  onChange={this.props.onChange}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  id="password"
                  type="password"
                  name="password"
                  onChange={this.props.onChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="row right-align">
              <input
                type="submit"
                className="waves-effect waves-light btn indigo lighten-1"
                value="Log in"
              />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
