import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { API_ROOT, BASIC_HEADERS } from '../constants';

class Signup extends Component {

  state={
    name:"",
    pronouns: "",
    password:""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmitHandler = e => {
    e.preventDefault();
    let user = { name: this.state.name, pronouns: this.state.pronouns, password: this.state.password }
    fetch(`${API_ROOT}users`, {
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
        <Form id="signup" onSubmit={this.onSubmitHandler}>
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
              type="pronouns"
              placeholder="Enter your pronouns"
              name="pronouns"
              value={this.state.pronouns}
              onChange={this.onChangeHandler}
            />
          </Form.Field>
          <br />
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

          <Button type='submit'>Sign up</Button>

        </Form>
      </Container>
    );
  }
};

export default Signup
