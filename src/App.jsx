// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import styles from './App.css';

import Counter from './_examples/components/Counter/Counter';
import Greeter from './_examples/components/Greeter/Greeter';
import ServEnvVarExample from './_examples/components/ServEnvVarExample/ServEnvVarExample';

type Props = {}

class App extends Component<Props> {

  renderHeader = () => (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>Welcome to React</h1>
    </header>
  );

  renderIntro() {
    return (
      <p className={styles.intro}>
        To get started, edit <code>src/App.js</code> and save to reload.123
      </p>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.container}>
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
