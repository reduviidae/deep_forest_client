import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

// components
import Login from "./Login"
import Signup from "./Signup"

export default class Welcome extends Component {
  render() {
    return (
      <div id="start-container">
        <div id="welcome-box">
          <h1>Welcome to this drawing app</h1>
            <div className="centered-container">
              <div className="welcome-button">
                <Link to={`/login`}>
                Login
                </Link>
              </div>
            </div>
                <br/>
                <br/>
              <div className="centered-container">
              <div className="welcome-button">
                <Link to={`signup`}>
                Signup
                </Link>
              </div>
            </div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    )
  }
};
