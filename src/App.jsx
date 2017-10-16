// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import Counter from './_examples/components/Counter/Counter';
import Greeter from './_examples/components/Greeter/Greeter';
import ServEnvVarExample from './_examples/components/ServEnvVarExample/ServEnvVarExample';

type Props = {}

class App extends Component<Props> {

  renderHeader = () => (
    <header className="App__header">
      <img src={logo} className="App__logo" alt="logo" />
      <h1 className="App__title">Welcome to React</h1>
    </header>
  );

  renderIntro() {
    return (
      <p className="App__intro">
        To get started, edit <code>src/App.js</code> and save to reload.123
      </p>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {this.renderHeader()}
          {this.renderIntro()}
          <Greeter greeting={'Hello'} />
          <Counter />
          <ServEnvVarExample />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
