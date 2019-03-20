import ActionCable from 'action-cable-react-jwt';
import React, { Component } from 'react';
import { CABLE, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';

class Cable extends Component {
  componentDidMount () {
    this.createSocket()
  }

  createSocket = () => {
    const yourToken = this.props.state.user.jwt
    let App = {}
    App.cable = ActionCable.createConsumer(`${CABLE}`, yourToken)
    const subscription = App.cable.subscriptions.create({channel: 'MessagesChannel'}, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        console.log(data)
        this.handleResponseData(data)
    }
  })
    console.log(subscription)
  }

  handleResponseData = data => {
    console.log(data)
    console.log("handleResponseData called");
  }

  render () {
    return (
      null
    )
  }
}

const mapStateToProps = state => {
  return { state }
}

export default connect(mapStateToProps)(Cable);
