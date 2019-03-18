import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';


class Canvas extends Component {

  state ={
    draw: false,
    plots: [{x: NaN, y: NaN}]
  }

  componentDidMount() {
  }

  drawToTrue = e => {
    this.setState({ draw: true })
  }

  drawToFalse = e => {
    this.setState({
      draw: false,
      plots: [{x: NaN, y: NaN}]
     })
  }

  drawOnCanvas = (plots) => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(plots[0].x, plots[0].y);
    for(let i=1; i<plots.length; i++) {
      ctx.lineTo(plots[i].x, plots[i].y);
    }
    ctx.stroke();
  }

  draw = e => {
    if(this.state.draw){
      let x = e.screenX
      let y = e.screenY
      let plots = [...this.state.plots]
      plots.push({x: x, y: y});
      this.setState({ plots })
      this.drawOnCanvas(plots);
    }
  }

  render (){
    return (
      <Container>
        <div id="canvas"
        onMouseDown={this.drawToTrue}
        onMouseUp={this.drawToFalse}
        onMouseMove={this.draw}
        >
          <canvas ref="canvas" />
        </div>
      </Container>
    )
  }
}

export default connect()(Canvas);
