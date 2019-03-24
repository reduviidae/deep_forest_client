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

export default App;
