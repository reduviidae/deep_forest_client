import React, { Component } from 'react';
import { Container, Button, Input, Form } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import Cable from './Cable'
import Message from '../components/Message'


class Chat extends Component {
  state ={
    newmessage: ""
  }


  componentDidMount(){

  }

  typeMessage = (e, data) => {
    this.setState({ newmessage: data.value })
  }

  sendMessage = e => {
    e.preventDefault();
    fetch(`${API_ROOT}messages`, {
      method: `POST`,
      headers: AUTH_HEADERS,
      body: JSON.stringify({
        game_id: this.props.game_id,
        user_id: this.props.state.userState.user.id,
        user_name: this.props.state.userState.user.name,
        content: this.state.newmessage
      })
    })
    .then(() => setTimeout(this.setState({ newmessage: "" }), 5000))
  }


  render (){
    const sortedMessages = !!this.props.state.currentGame && this.props.state.currentGame.messages.sort(function(a, b){
          var keyA = new Date(a.created_at),
              keyB = new Date(b.created_at);
          // Compare the 2 dates
          if(keyA < keyB) return -1;
          if(keyA > keyB) return 1;
          return 0;
      }).slice(-10);

    const messages = !!sortedMessages && sortedMessages.map(message => <Message key={`message=${message.id}`} message={message} />)
      return (
        <Container>
        <ul>
        {messages}
        </ul>
        <Cable game_id={this.props.game_id}/>
        <div id="new-message-box">
          <Form onSubmit={this.sendMessage}>
            <Input size="big" focus value={this.state.newmessage} type="textarea" name="newmessage" onChange={this.typeMessage}/>
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
    loadGames: data => dispatch({ type: "LOAD_GAMES", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
