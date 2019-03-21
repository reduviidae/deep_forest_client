import React, { Component } from 'react';
import { Container, Button, Input, Form } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cable from './Cable'
import Message from '../components/Message'

//helpers
import messagesSubscription from "../ActionCable/messagessubscription";

class Chat extends Component {
  state ={
    newmessge: ""
  }
// *************************************************************

// componentWillMount() {
//     const { game_id } = this.props;
//
//     const messageChannel = new messagesSubscription({
//       game_id,
//       onUpdate: this.onMessageUpdate,
//     });
//
//     messageChannel.subscribe();
//   }
//
//   onMessageUpdate = (data) => {
//     console.log("onMessageUpdate", data)
//     this.props.loadMessages(data);
//   }
//

// *************************************************************



  componentDidMount(){
    this.fetchGameData()

  }

  fetchGameData = () => {
    fetch(`${API_ROOT}messages`, {
      method: `GET`,
      headers: AUTH_HEADERS,
    })
    .then(r => r.json())
    .then(this.props.getMessages)
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
        game_id: this.props.game_id,
        user_id: this.props.state.userState.id,
        content: this.state.newmessge
      })
    })
    .then(r => console.log("sendMessage first then", r))
    .then(() => this.setState({ newmessge: "" }))
  }


  render (){
    const messages = this.props.state.userState.messages.map(message => <Message key={`message=${message.id}`} message={message} />)
      return (
        <Container>
        <ul>
        {messages}
        </ul>
        <Cable game_id={this.props.game_id}/>
        <div id="new-message-box">
          <Form onSubmit={this.sendMessage}>
            <Input size="big" Input focus type="textarea" name="newmessge" onChange={this.typeMessage}/>
            <Button>Send Message</Button>
          </Form>
        </div>
      </Container>
    )}
}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMessages: data => dispatch({ type: "LOAD_MSGS", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
