import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';

// components
import Login from "./Login"
import Signup from "./Signup"

export default class Welcome extends Component {
  render() {
    return (
      <Container id="start-container">
        <div id="welcome-box">
          <h1>Welcome to this drawing app</h1>
            <div className="centered-container">
              <Button basic color='olive'>
                <Link to={`/login`}>
                Login
                </Link>
              </Button>
            </div>
                <br/>
                <br/>
              <div className="centered-container">
              <Button basic color='olive'>
                <Link to={`signup`}>
                Signup
                </Link>
              </Button>
            </div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Container>
    )
  }
};
