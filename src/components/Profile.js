import React, { Component } from 'react';
import { Container, List, Input, Button } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS, GAME_ID } from '../constants';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import GameList from './GameList';
// import Cable from '../ActionCable/Cable'




class Profile extends Component {

  state ={
    newPronouns: ""
  }

  componentDidMount(){
    this.fetchUserData()
  }

  enterPronouns = (e, data) => {
    this.setState({ newPronouns: data.value })
  }

  changePronouns = () => {
    fetch(`${API_ROOT}users/${this.props.state.userState.user.id}`, {
      method: `PATCH`,
      headers: AUTH_HEADERS,
      body: JSON.stringify({
        pronouns: this.state.newPronouns
      })
    })
    .then(r => r.json())
    .then(this.props.changePronouns)
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
          <br />
          <List className="user-games">
          <Link key={`${GAME_ID}`} game={'Chat and Draw'} to={`/game/${GAME_ID}`}>Join Chat and Draw</Link>
          </List>
          <br/>
          <p>Which animal do you feel like today?</p>
          <List className="avis">
            <label htmlFor="img">Pink Fairy Armadillo</label>
            <img className="avi-img" src={require("../img/pink_fairy_armadillo.png")} alt="pink fairy armadillo"/>
          </List>
          <br />
          <p>Your pronouns are currently set to: {this.props.state.userState.user.pronouns}</p>
          <Input type="text" placeholder="Enter new pronouns" name="pronouns" onChange={(e, data) => this.enterPronouns(e, data)}/>
          <br/>
          <Button className="button" type='submit' onClick={this.changePronouns}>Change Pronouns</Button>
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
    profile: data => dispatch({ type: "SHOW_USER", payload: data }),
    changePronouns: data => dispatch({ type: "NEW_PRONOUNS", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
