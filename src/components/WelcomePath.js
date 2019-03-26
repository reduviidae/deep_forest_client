import React from 'react';
import {  NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

const WelcomePath = () => {
return (

    <div className="welcome-box">
      <h1 className="lead-text centered-text">Flatiron Draw & Chat</h1>
        <div className="centered-container">
          <Button basic color='olive'>
            <NavLink activeStyle={{textDecoration: "none", fontSize: "3em", fontColor: "#1b1b1b"}} style={{textDecoration: "none", fontSize: "3em", fontColor: "#1b1b1b"}} to={`/login`}>
            Login
            </NavLink>
          </Button>
        </div>
            <br/>
          <div className="centered-container">
          <Button basic color='olive'>
            <NavLink activeStyle={{textDecoration: "none", fontSize: "3em", fontColor: "#1b1b1b"}} style={{textDecoration: "none", fontSize: "3em", fontColor: "#1b1b1b"}} to={`/signup`}>
            Signup
            </NavLink>
          </Button>
        </div>
      </div>
)
}

export default connect()(WelcomePath);
