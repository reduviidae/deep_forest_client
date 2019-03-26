import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

// components
import WelcomePath from "./WelcomePath";
import Login from "./Login";
import Signup from "./Signup";

class Welcome extends Component {

  render() {
    return (
      <Container>
        <div className="welcome-grid">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={WelcomePath} />
          </Switch>
          </div>
      </Container>
    )
  }
};

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return (
    null
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
