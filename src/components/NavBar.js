import React from 'react';
import {  NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = () => {
return (
  <div className="nav-bar">
    <img src={require("../img/placeholderLogo.png")} alt="logo" id="logo"/>
  </div>
)
}

export default connect()(NavBar);
