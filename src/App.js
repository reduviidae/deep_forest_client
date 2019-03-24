import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { JWT_SECRET } from './constants';
import { connect } from 'react-redux';

// components
import Welcome from "./components/Welcome"
import Profile from "./components/Profile"
import GameContainer from "./containers/GameContainer"

const token = localStorage.getItem('token');

if (token) {
    console.log(token)

}

class App extends Component {
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
  const request = fetch(`${API_ROOT}` {
    method: 'get',
    url: `${ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: "ME_FROM_TOKEN",
    payload: request
  };
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

const mapDispatchToProps = (dispatch) => {
 return {
  loadUserFromToken: () => {
   if(!token || token === "") {
    return;
   }
  dispatch(meFromToken(token))
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
