import React, { Component } from "react";
import Auth from "../../components/Auth/Auth";
import { Redirect } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {Auth.isUserAuthenticated() ? (
          <div className="App">
            <p className="App-intro">App</p>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default App;
