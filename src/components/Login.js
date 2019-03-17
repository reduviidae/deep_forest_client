import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Login extends Component {

  state={
    name:"",
    pronouns:"",
    password:""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <form id="login">
        <input
          type="text"
          placeholder="Enter your username"
          name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
        />
        <br/>
        <input
          type="text"
          placeholder="Enter your pronouns"
          name="pronouns"
          value={this.state.pronouns}
          onChange={this.onChangeHandler}
        />
        <br/>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
        />
      </form>
    );
  }
};

export default Login
