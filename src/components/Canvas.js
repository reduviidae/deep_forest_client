import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS, DRAWING_ID, GAME_ID } from '../constants';
import DrawingCable from '../ActionCable/DrawingCable';
import ColorPalette from './ColorPalette';

class Canvas extends Component {

  state = {
    plots: []
  }

  componentDidMount() {
    this.props.getDrawingState(DRAWING_ID)
  }

  drawToFalse = e => {
    // check to ensure state has correctly formatted data, and prevent crash if not
    let plots = !!this.props.drawing.plots && this.props.drawing.plots.filter(plot => plot.x !== null && plot.y !== null)
    if(this.props.drawing.draw && this.props.drawing.plots){
      fetch(`${API_ROOT}drawings`, {
          method: `PATCH`,
        headers: AUTH_HEADERS,
        body: JSON.stringify({
          draw: true,
          color: this.props.drawing.color,
          lineWidth: this.props.drawing.lineWidth,
          plots: plots,
          game_id: GAME_ID
        })
      }).then(this.setState({ plots: [] }))
    }
    this.props.drawToFalse()
  }

  drawOnCanvas = (plots, color = this.props.drawing.color, lineWidth = this.props.drawing.lineWidth) => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d")
    ctx.miterLimit = 0.25;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = "bevel";
    ctx.strokeStyle = color;
    ctx.imageSmoothingQuality = "high";
    if(!!plots[0]){
      ctx.beginPath();
      ctx.moveTo(plots[0].x, plots[0].y);
      for(let i=1; i<plots.length; i++) {
        ctx.lineTo(plots[i].x, plots[i].y);
      };
      ctx.stroke();
    }
  }

  getMousePos = e => {
    const canvas = this.refs.canvas;
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;

    return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  }
}

  draw = e => {
    if(this.props.drawing.draw){
      let position = this.getMousePos(e)
      let plots = [...this.state.plots]
      plots.push(position);
      this.setState({ plots })
      this.props.setPlots(plots)
      this.drawOnCanvas(plots);
    }
  }

  changeColor = e => {
    let color = `#${e.target.id}`.replace("c-", "")
    this.props.changeColor(color)
  }

  changeSize = e => {
    switch(e.target.id){
      case "small":
        this.props.changeSize(1);
        break;
      case "medium":
       this.props.changeSize(5);
       break;
      case "large":
        this.props.changeSize(20);
        break;
      default:
        return this.state.lineWidth
    }
  }

  render (){
    return (
      <Container>
        <DrawingCable drawOnCanvas={this.drawOnCanvas} />
        <div id="canvas"
        onMouseDown={this.props.drawToTrue}
        onMouseUp={this.drawToFalse}
        onMouseMove={this.draw}
        >
          <canvas ref="canvas" width={(window.outerWidth * .7)} height={(window.innerHeight * .8)}/>
        </div>
        <br />
        <ColorPalette changeColor={this.changeColor}/>
        <div className="drawing-tool-sizes">
          <div className="drawing-tool-size size-text" id="small" onClick={this.changeSize}>S</div>
          <div className="drawing-tool-size size-text" id="medium" onClick={this.changeSize}>M</div>
          <div className="drawing-tool-size size-text" id="large" onClick={this.changeSize}>L</div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return (
    state
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getDrawingState: data => dispatch({ type: "GET_DRAW", payload: data }),
    drawToTrue: data => dispatch({ type: "START_DRAW" }),
    drawToFalse: data => dispatch({ type: "END_DRAW" }),
    changeColor: data => dispatch({ type: "COLOR", payload: data }),
    changeSize: data => dispatch({ type:"SIZE", payload: data}),
    setPlots: data => dispatch({ type: "PLOTS", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
