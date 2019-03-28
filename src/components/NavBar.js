import React from 'react';
import {  NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = props => {
return (
  <div className="nav-bar">
    <img src={require("../img/logo.png")} alt="logo" id="nav-logo"/>
    <NavLink activeStyle={{color: "#1b1b1b"}} style={{margin: "15px", textDecoration: "none", fontSize: "0.5em", color: "#1b1b1b"}} to={`/profile`}>Profile</NavLink>
    <NavLink activeStyle={{color: "#1b1b1b"}} style={{margin: "15px", textDecoration: "none", fontSize: "0.5em", color: "#1b1b1b"}} onClick={props.mapDispatchToProps} to={`/`}>Logout</NavLink>
  </div>
)
}

const mapDispatchToProps = dispatch => {
  return {
    logout: data => dispatch({ type: "LOGOUT"})
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
