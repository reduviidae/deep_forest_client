import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/userActions'


class Profile extends Component {
  componentDidMount(){
    console.log(this.props)
  }

  render (){
    return (
      <Container>

      </Container>
    )
  }
}

export default connect()(Profile);
