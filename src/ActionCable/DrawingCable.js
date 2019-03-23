import { ActionCable } from 'react-actioncable-provider';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class DrawingCable extends Component {

  render () {
    return (
      <Fragment>
        <ActionCable
          key={this.props.game_id}
          channel={{ channel: "DrawingsChannel", game_id: this.props.game_id }}
          onReceived={(data) => {
            console.log("DrawingChannel recvd data: ", data)
            this.props.getDrawing(data)
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
    getDrawing: data => dispatch({ type: "CABLE_DRAW", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingCable);
