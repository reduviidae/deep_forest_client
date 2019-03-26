import { ActionCable } from 'react-actioncable-provider';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { GAME_ID } from '../constants';


class DrawingCable extends Component {

  render () {
    return (
      <Fragment>
        <ActionCable
          channel={{ channel: "DrawingsChannel", game_id: GAME_ID }}
          onReceived={(data) => {
            this.props.getDrawing(data)
            if (!!data.drawing){
              this.props.drawOnCanvas(data.drawing.plots, data.drawing.color, data.drawing.lineWidth)
            }
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
