import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Welcome from "./components/Welcome"


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Welcome} />
      </Switch>
    );
  }
}

export default App;
