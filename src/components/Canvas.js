import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS, SUB_KEY, PUB_KEY } from '../constants';

class Canvas extends Component {

  state ={
    draw: false,
    plots: [{x: NaN, y: NaN}],
    color: "#1b1b1b",
    lineWidth: 5
  }

  componentDidMount() {

  }



  drawToTrue = e => {
    this.setState({ draw: true })
  }

  drawToFalse = e => {
    fetch(`${API_ROOT}drawings`, {
      method: `PATCH`,
      headers: AUTH_HEADERS,
      body: JSON.stringify({
        draw: true,
        color: this.state.color,
        lineWidth: this.state.lineWidth,
        plots: this.state.plots,
        id: this.props.currentGame.drawing.id
      })
    })
    this.setState({
      draw: false,
      plots: [{x: NaN, y: NaN}]
     })
  }

  drawOnCanvas = (plots) => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d")
    ctx.miterLimit = 0.25;
    ctx.lineWidth = this.state.lineWidth;
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
    let color = `#${e.target.id}`.replace("c-", "")
    this.setState({ color })
  }

  changeSize = e => {
    switch(e.target.id){
      case "small":
        this.setState({ lineWidth: 1 });
        break;
      case "medium":
       this.setState({ lineWidth: 5 });
       break;
      case "large":
        this.setState({ lineWidth: 10 });
        break;
      default:
        return this.state.lineWidth
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
          <canvas ref="canvas" width={800} height={700}/>
        </div>
        <div>
          <div className="color-palette" id="c-e12c2c" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-ff8833" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-fafa37" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-afe313" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-3aa655" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-00cccc" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-0066ff" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-3f26bf" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-803790" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-c8c8cd" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-8B8680" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-1b1b1b" onClick={this.changeColor}>
          </div>
          <div className="color-palette" id="c-ffffff" onClick={this.changeColor}>
          </div>
        </div>
        <br />
        <div className="drawing-tool-sizes">
          <div className="drawing-tool-size" id="small" onClick={this.changeSize}>Small</div>
          <div className="drawing-tool-size" id="medium" onClick={this.changeSize}>Medium</div>
          <div className="drawing-tool-size" id="large" onClick={this.changeSize}>Large</div>
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

export default connect(mapStateToProps)(Canvas);
