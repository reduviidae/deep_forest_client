import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { API_ROOT, AUTH_HEADERS } from './constants';
import { connect } from 'react-redux';

// components
import Welcome from "./components/Welcome"
import Profile from "./components/Profile"
import GameContainer from "./containers/GameContainer"

const token = localStorage.getItem('token');


class App extends Component {

  componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/game/:id" component={GameContainer} />
        <Route path="/" component={Welcome} />
      </Switch>
    );
  }
}

const meFromToken = tokenFromStorage => {
  fetch(`${API_ROOT}me-from-token`, {
    method: 'GET',
    headers: AUTH_HEADERS
  })
  .then(r => r.json())
  .then(data => {
    console.log(data)
    return {
      type: "ME_FROM_TOKEN",
      payload: data
    };
  })
}

const meFromTokenSuccess = currentUser => {
  return {
    type: "ME_FROM_TOKEN_SUCCESS",
    payload: currentUser
  };
}

const meFromTokenFailure = error => {
  return {
    type: "ME_FROM_TOKEN_FAILURE",
    payload: error
  };
}

const resetToken = () => {
  return {
    type: "LOGOUT"
  };
}


const mapDispatchToProps = (dispatch) => {
 return {
  loadUserFromToken: () => {
   if(!token || token === "") {
    return;
   }
   let userData = meFromToken(token).json();
   let userJSON = userData;
  dispatch(userJSON)
  .then((response) => {
   if (!response.error) {
    //store token
    sessionStorage.setItem(token, response.payload.data.token);
    dispatch(meFromTokenSuccess(response.payload))
   } else {
    //remove token from storage
    sessionStorage.removeItem(token);
    dispatch(meFromTokenFailure(response.payload));
   }
  });
 },
 resetMe: () =>{ // logout
 sessionStorage.removeItem(token); //remove token from storage
 dispatch(resetToken());
 }
 }
}

export default connect(null, mapDispatchToProps)(App);
