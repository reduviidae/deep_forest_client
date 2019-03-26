import React from 'react';
import {  NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const LoginSignupButtons = () => {
return (
  <div>
    <div className="centered-container">
      <Button basic color='olive'>
        <NavLink activeStyle={{textDecoration: "none", fontSize: "3em", color: "#1b1b1b"}} style={{textDecoration: "none", fontSize: "3em", color: "#1b1b1b"}} to={`/login`}>
        Login
        </NavLink>
      </Button>
    </div>
        <br/>
      <div className="centered-container">
      <Button basic color='olive'>
        <NavLink activeStyle={{textDecoration: "none", fontSize: "3em", color: "#1b1b1b"}} style={{textDecoration: "none", fontSize: "3em", color: "#1b1b1b"}} to={`/signup`}>
        Signup
        </NavLink>
      </Button>
    </div>
  </div>
)
}

export default LoginSignupButtons;
