import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Base from "./components/Base/Base";
import App from "./containers/App/App";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Base />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
