import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Welcome from "./components/Welcome"
import Profile from "./components/Profile"
import Canvas from "./components/Canvas"
import Chat from "./ActionCable/Chat"


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/canvas" component={Canvas} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Welcome} />
      </Switch>
    );
  }
}

export default App;
