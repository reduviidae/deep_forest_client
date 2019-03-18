import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Welcome from "./components/Welcome"
import Canvas from "./components/Canvas"


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/canvas" component={Canvas} />
        <Route path="/" component={Welcome} />
      </Switch>
    );
  }
}

export default App;
