import React from 'react';
import { connect } from 'react-redux';
import LoginSignupButtons from './LoginSignupButtons';

const WelcomePath = () => {
return (
    <div className="welcome-box">
      <div className="cream-background-layer">
        <h1 className="lead-text centered-text">Flatiron Draw & Chat</h1>
        <br/>
        <LoginSignupButtons />
      </div>
    </div>
)
}

export default connect()(WelcomePath);
