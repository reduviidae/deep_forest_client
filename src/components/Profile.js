import React, { Component } from 'react';
import { Container, List, Input, Button } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS, GAME_ID } from '../constants';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import NavBar from "./NavBar"




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

  changeAvatar = e => {
    fetch(`${API_ROOT}users/${this.props.state.userState.user.id}`, {
      method: `PATCH`,
      headers: AUTH_HEADERS,
      body: JSON.stringify({
        avatar: e.target.alt
      })
    })
    .then(r => r.json())
    .then(data => this.props.changeAvatar(data.avatar))
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
    console.log(this.props.state.userState.user.avatar);
    if (!this.props.state.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <Container id="profile-container">
          <NavBar/>
          <div id="show-profile">
          <h2>Welcome back, {this.props.state.userState.user.name}</h2>
          <br/>
          <br/>
          <br/>
          <br/>
          <p>Click on an animal to change your chat avatar.</p>
          <List className="avis">
            <img className="avi-img" onClick={this.changeAvatar} src={require("../img/pink_fairy_armadillo.png")} alt="pink_fairy_armadillo"/>
            <img className="avi-img" onClick={this.changeAvatar} src={require("../img/okapi.png")} alt="okapi"/>
            <img className="avi-img" onClick={this.changeAvatar} src={require("../img/manedwolf.png")} alt="manedwolf"/>
            <img className="avi-img" onClick={this.changeAvatar} src={require("../img/glaucus_atlanticus.png")} alt="glaucus_atlanticus"/>
            <img className="avi-img" onClick={this.changeAvatar} src={require("../img/fossa.png")} alt="fossa"/>
          </List>
          <br/>
          <br/>
          <br/>
          <br/>
          <p>Your pronouns are currently set to: {this.props.state.userState.user.pronouns}</p>
          <Input type="text" placeholder="Enter new pronouns" name="pronouns" onChange={(e, data) => this.enterPronouns(e, data)}/>
          <br/>
          <Button className="button" type='submit' onClick={this.changePronouns}>Change Pronouns</Button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <NavLink activeStyle={{color: "#1b1b1b"}} style={{textDecoration: "none", fontSize: "3em", color: "#1b1b1b", float: "right"}} key={`${GAME_ID}`} game={'Chat and Draw'} to={`/game/${GAME_ID}`}>Join Chat and Draw</NavLink>
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
    changePronouns: data => dispatch({ type: "NEW_PRONOUNS", payload: data }),
    changeAvatar: data => dispatch({ type: "NEW_AVATAR", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
