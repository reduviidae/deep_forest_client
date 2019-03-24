import { ActionCable } from 'react-actioncable-provider';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { GAME_ID } from './constants';


class Cable extends Component {

  render () {
    return (
      <Fragment>
        <ActionCable
          channel={{ channel: "MessagesChannel", game_id: GAME_ID }}
          onReceived={(data) => {
            console.log("MessagesChannel recvd data: ",data)
            console.log(data.message.id)
            this.props.getMessages(data.message)
          }}
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
    getMessages: data => dispatch({ type: "UP_MSG", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cable);
