import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';


class Canvas extends Component {

  state ={
    draw: false,
    plots: [{x: NaN, y: NaN}],
    color: "#1B1B1B"
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
    ctx.miterLimit = 0.25;
    ctx.lineWidth = 0.25;
    ctx.lineJoin = "round";
    ctx.strokeStyle = this.state.color;
    ctx.imageSmoothingQuality = "high";
    ctx.beginPath();
    ctx.moveTo(plots[0].x, plots[0].y);
    for(let i=1; i<plots.length; i++) {
      ctx.lineTo(plots[i].x, plots[i].y);
    };
    ctx.stroke();
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
    if(this.state.draw){
      let position = this.getMousePos(e)
      let plots = [...this.state.plots]
      plots.push(position);
      this.setState({ plots })
      this.drawOnCanvas(plots);
    }
  }

  changeColor = e => {
    let color = `#${e.target.id}`
    this.setState({ color })
  }

  render (){
    return (
      <Container>
        <div id="canvas"
        onMouseDown={this.drawToTrue}
        onMouseUp={this.drawToFalse}
        onMouseMove={this.draw}
        >
          <canvas ref="canvas" width={800} height={700}/>
        </div>
        <div id="e12c2c" onClick={this.changeColor}>
        </div>
      </Container>
    )
  }
}

export default connect()(Canvas);
