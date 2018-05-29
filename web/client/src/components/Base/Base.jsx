import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import "./Base.css";

export default function Base() {
  return (
    <div>
      <nav className="nav-bar indigo lighten-1">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Base
          </a>
          <ul id="nav-mobile" className="right">
            {Auth.isUserAuthenticated() ? (
              <div>
                <li>{Auth.getEmail()}</li>
                <li>
                  <Link to="/logout">Log out</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
      <br />
    </div>
  );
}
