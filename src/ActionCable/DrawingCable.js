import { ActionCable } from 'react-actioncable-provider';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class DrawingCable extends Component {

  render () {
    console.log(this.props)
    return (
      <Fragment>
        <ActionCable
          key={this.props.game_id}
          channel={{ channel: "DrawingsChannel", game_id: this.props.game_id }}
          onReceived={(data) => {
            console.log(data)
            console.log(this.props.getDrawing)
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
    getDrawing: data => dispatch({ type: "DRAW", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingCable);
