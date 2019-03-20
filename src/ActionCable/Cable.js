import { ActionCableConsumer } from 'react-actioncable-provider';
import React, { Component } from 'react';
import { CABLE, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import Message from '../components/Message';

class Cable extends Component {

  state ={
    messages: []
  }

  getMessages = messages => {
    this.setState({ messages })
  }

  render () {
    console.log(this.state)
    console.log(this.props)
    let messages = this.state.messages.map(message => <Message data={message} key={message.id}/>)
    return (
      <div>
        <ActionCableConsumer
          channel="MessagesChannel"
          onReceived={this.getMessages}
        />
        {messages}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: data => dispatch({ type: "LOAD_MSGS", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cable);
