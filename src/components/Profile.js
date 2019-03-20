import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import Cable from '../ActionCable/Cable'




class Profile extends Component {
  componentDidMount(){
    this.fetchUserData()
  }

  fetchUserData = () => {
      if(!!this.props.state.user.user){
        fetch(`${API_ROOT}users/${this.props.state.user.user.id}`, {
          method: `GET`,
          headers: AUTH_HEADERS,
        })
        .then(r => r.json())
        .then(this.props.profile)
      }

  }

  userGames = () => {
    if(!!this.props.state.user.games){
      this.props.state.user.games.map(game => <li key={game.id}>{game.title}</li>)
    }
  }

  render (){
    console.log(this.props.state.user.games)
      if (this.props.state.user.id === 0){
        return (
          <Redirect to="/" />
      )
    } else {
      return (
        <Container>
          <ul className="user-games">
            {this.userGames()}
          </ul>
      </Container>
    )}
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
