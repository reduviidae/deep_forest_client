import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Welcome from "./components/Welcome"
import Profile from "./components/Profile"
import GameContainer from "./containers/GameContainer"

const token = localStorage.getItem('token');


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

export default App;
