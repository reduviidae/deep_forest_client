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
        content: this.state.newmessage
      })
    })
    .then(() => this.setState({ newmessage: "" }))
  }


  render (){
    console.log(this.props.state)
    const messages = this.props.state.userState.user.messages.map(message => <Message key={`message=${message.id}`} message={message} />)
      return (
        <Container>
        <ul>
        {messages}
        </ul>
        <Cable game_id={this.props.game_id}/>
        <div id="new-message-box">
          <Form onSubmit={this.sendMessage}>
            <Input size="big" Input focus value={this.state.newmessage} type="textarea" name="newmessage" onChange={this.typeMessage}/>
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
