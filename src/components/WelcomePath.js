import React from 'react';
import {  NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import LoginSignupButtons from './LoginSignupButtons';

const WelcomePath = () => {
return (
    <div className="welcome-box">
    <div className="cream-background-layer">
      <h1 className="lead-text centered-text">Flatiron Draw & Chat</h1>
      <LoginSignupButtons />
    </div>
  </div>
)
}

export default connect()(WelcomePath);
