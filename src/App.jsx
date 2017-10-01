// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './_killme/Counter';

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter greeting={'Hello'} />
      </div>
    );
  }
}

export default App;
