import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { API_ROOT, BASIC_HEADERS } from '../constants';

class Login extends Component {

  state={
    name:"",
    password:""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmitHandler = e => {
    e.preventDefault();
    let user = { name: this.state.name, password: this.state.password }
    fetch(`${API_ROOT}login`, {
      method: `POST`,
      headers: BASIC_HEADERS,
      body: JSON.stringify({ user })
    })
    .then(r => r.json())
    .then(console.log)
  }

  render() {
    return (
      <Container>
        <Form id="login" onSubmit={this.onSubmitHandler}>
          <Form.Field>
            <input
              type="text"
              placeholder="Enter your username"
              name="name"
              value={this.state.name}
              onChange={this.onChangeHandler}
            />
          </Form.Field>
          <br/>
          <Form.Field>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
          </Form.Field>
          <br/>

          <Button type='submit'>Login</Button>

        </Form>
      </Container>
    );
  }
};

export default Login
