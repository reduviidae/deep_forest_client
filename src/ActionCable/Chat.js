import React, { Component } from 'react';
import { Container, Button, Input, Form } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cable from './Cable'

class Chat extends Component {
  state ={
    newmessge: ""
  }

  componentDidMount(){
    this.fetchGameData()
  }

  fetchGameData = () => {
    fetch(`${API_ROOT}games`, {
      method: `GET`,
      headers: AUTH_HEADERS,
    })
    .then(r => r.json())
    .then(this.props.getGames)
  }

  typeMessage = (e, data) => {
    this.setState({ newmessge: data.value })
  }

  sendMessage = e => {
    e.preventDefault();
    fetch(`${API_ROOT}messages`, {
      method: `POST`,
      headers: AUTH_HEADERS,
      body: JSON.stringify({
        conversation_id: 20,
        user_id: 96,
        content: this.state.newmessge
      })
    })
    .then(res => res.json())
    .then(console.log)
  }


  render (){
    console.log(this.state)
    const messages = !!this.props.state.games.messages && this.props.state.games.messages.map (message => <li key={message.id}>{message.user_id}: {message.content}</li>)
      return (
        <Container>
        <ul>
        {messages}
        </ul>
        <Cable />
        <Form onSubmit={this.sendMessage}>
          <Input size="big" Input focus type="textarea" name="newmessge" onChange={this.typeMessage}/>
          <Button>Send Message</Button>
        </Form>
      </Container>
    )}
}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    getGames: data => dispatch({ type: "LOAD_MSGS", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
