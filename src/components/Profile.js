import React, { Component } from 'react';
import { Container, List, Button, Form, Input } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import GameList from './GameList';
// import Cable from '../ActionCable/Cable'




class Profile extends Component {
  state={
    gameForm: false,
    gameTitle: ""
  }

  componentDidMount(){
    this.fetchUserData()
  }

  fetchUserData = () => {
    if(!!this.props.state.userState.loggedIn){
      fetch(`${API_ROOT}users/${this.props.state.userState.user.id}`, {
        method: `GET`,
        headers: AUTH_HEADERS,
      })
      .then(r => r.json())
      .then(this.props.profile)
    }
  }

  gameForm = () => {
    this.setState({ gameForm: !this.state.gameForm })
  }

  gameTitle = e => {
    this.setState({ gameTitle: e.target.value})
  }

  newGame = (e, data) => {
    e.preventDefault()
    fetch(`${API_ROOT}games`, {
      method: `POST`,
      headers: AUTH_HEADERS,
      body: JSON.stringify({
        title: this.state.gameTitle
      })
    })
    .then(r => r.json())
    .then(data => {
      fetch(`${API_ROOT}user_games`, {
        method: `POST`,
        headers: AUTH_HEADERS,
        body: JSON.stringify({
          game_id: data.id,
          user_id: this.props.state.userState.id
        })
      })
      .then(r => r.json())
      .then(this.props.addGame)
    })
  }

  render (){
    console.log(this.props.state)
    const userGames = !!this.props.state.userState.user.games &&
        this.props.state.userState.user.games.map(game => <Link key={`game=${game.id}`} game={game} to={`/game/${game.id}`}>{game.title}</Link>)
    if (!this.props.state.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <Container id="profile-container">
          <div id="show-profile">
          <h2>Welcome back, {this.props.state.userState.user.name}</h2>
          <h3>Games:</h3>
          <List className="user-games">
            {userGames}
          </List>
          <Button onClick={this.gameForm}>New Game</Button>
          </div>
          <br />
          {this.state.gameForm ?
            <Container id="new-game-form">
              <br/>
              <Form onSubmit={this.newGame}>
                <Form.Field>
                  <label>Game Title</label>
                  <Input placeholder='Enter game title' value={this.state.gameTitle} onChange={this.gameTitle}/>
                </Form.Field>
                <Button type='submit'>Create</Button>
              </Form>
            </Container> :
            null
          }
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
    profile: data => dispatch({ type: "SHOW_USER", payload: data }),
    addGame: data => dispatch({ type: "ADD_GAME", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
