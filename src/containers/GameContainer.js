import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// components
import Canvas from "../components/Canvas";
import Chat from "../ActionCable/Chat";


class GameContainer extends Component {


  componentDidMount(){
    this.fetchGame()
  }

  fetchGame = () => {
    fetch(`${API_ROOT}games/${this.props.match.params.id}`, {
      method: `GET`,
      headers: AUTH_HEADERS
    })
      .then(r => r.json())
      .then(this.props.currentGame)
  }

  render (){
      if (!this.props.state.loggedIn){
        return (
          <Redirect to="/" />
        )
      } else {
        return (
        <Container className="game-container">
          <div className="canvas-container">
            <Canvas currentGame={this.props.state} game_id={this.props.match.params.id}/>
          </div>
          <div className="chat-container">
            <Chat game_id={this.props.match.params.id}/>
          </div>
        </Container>
        )
      }
    }
  }

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    currentGame: data => dispatch({ type: "CUR_GAME", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
