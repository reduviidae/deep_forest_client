import React from 'react';
import {  Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

const WelcomePath = () => {
return (
  <div id="welcome-box">
    <h1 className="lead-text centered-text">Welcome to this drawing app</h1>
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
          <Link to={`/signup`}>
          Signup
          </Link>
        </Button>
      </div>
    </div>
)
}

export default connect()(WelcomePath);
