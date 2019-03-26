import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS, GAME_ID } from '../constants';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import GameList from './GameList';
// import Cable from '../ActionCable/Cable'




class Profile extends Component {

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


  render (){
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
            <Link key={`${GAME_ID}`} game={'Chat and Draw'} to={`/game/${GAME_ID}`}>Join Chat and Draw</Link>
          </List>
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
    profile: data => dispatch({ type: "SHOW_USER", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
