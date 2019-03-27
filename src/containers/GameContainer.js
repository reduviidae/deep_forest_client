import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// components
import Canvas from "../components/Canvas";
import Chat from "../ActionCable/Chat";
import NavBar from "../components/NavBar"

class GameContainer extends Component {

  componentDidMount(){
    this.fetchGame()
    this.fetchMessages()
  }

  fetchGame = () => {
    fetch(`${API_ROOT}games/${this.props.match.params.id}`, {
      method: `GET`,
      headers: AUTH_HEADERS
    })
      .then(r => r.json())
      .then(this.props.currentGame)
  }

  fetchMessages = () => {
    fetch(`${API_ROOT}messages`, {
      method: `GET`,
      headers: AUTH_HEADERS
    })
      .then(r => r.json())
      .then(this.props.allMessages)
  }

  render (){
      if (!this.props.state.loggedIn){
        return (
          <Redirect to="/" />
        )
      } else {
        return (
        <Container>
        <NavBar />
        <div className="game-container">
          <div className="canvas-container">
            <Canvas currentGame={this.props.state} />
          </div>
          <div className="chat-container">
            <Chat />
          </div>
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
    currentGame: data => dispatch({ type: "CUR_GAME", payload: data }),
    allMessages: data => dispatch({ type: "MESSAGES", payload: data })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
