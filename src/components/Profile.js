import React, { Component } from 'react';
import { Container, List, Button, Form, Input } from 'semantic-ui-react';
import { API_ROOT, AUTH_HEADERS } from '../constants';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
    if(!!this.props.state.userState){
      fetch(`${API_ROOT}users/${this.props.state.userState.user.id}`, {
        method: `GET`,
        headers: AUTH_HEADERS,
      })
      .then(r => r.json())
      .then(this.props.profile)
    }
  }

  gameForm = () => {
    console.log(this.state.gameForm)
    this.setState({ gameForm: !this.state.gameForm })
  }

  gameTitle = e => {
    this.setState({ gameTitle: e.target.value})
  }

  newGame = (e, data) => {
    e.preventDefault()
    console.log(data.value)
    // fetch(`${API_ROOT}games`, {
    //   method: `POST`,
    //   headers: AUTH_HEADERS,
    //   body: JSON.stringify({
    //     title:
    //   })
    // })
  }

  render (){
    console.log(this.props.state.userState.user)
    const userGames = !!this.props.state.userState.games &&
        this.props.state.userState.games.map(game => <List.Item key={game.id}>{game.title}</List.Item>)


      return (
        <Container>
          <h2>{this.props.state.userState.name}</h2>
          <h3>Games:</h3>
          <List className="user-games">
            {userGames}
          </List>
          <Button onClick={this.gameForm}>New Game</Button>
          <br />
          {this.state.gameForm ?
            <Container>
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
    )}
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
