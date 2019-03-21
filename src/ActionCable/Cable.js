import { ActionCable } from 'react-actioncable-provider';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Cable extends Component {

  render () {
    console.log("Cable.js")
    return (
      <Fragment>
        <ActionCable
          key={this.props.game_id}
          channel={{ channel: "MessagesChannel", game_id: this.props.game_id }}
          onReceived={(data) => {
            console.log("onReceived called", data);
            this.props.getMessages(data)
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
    getMessages: data => dispatch({ type: "LOAD_MSGS", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cable);
