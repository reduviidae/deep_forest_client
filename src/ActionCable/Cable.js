import ActionCable from 'actioncable'
import { ActionCableConsumer } from 'react-actioncable-provider';
import React, { Component, Fragment } from 'react';
import { CABLE, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import Message from '../components/Message';

class Cable extends Component {

  render () {
    return (
      <Fragment>
        <ActionCableConsumer
          key={this.props.game_id}
          channel={{ channel: "MessagesChannel", game_id: this.props.game_id }}
          onReceived={this.props.getMessages}
        />
    </Fragment>
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
