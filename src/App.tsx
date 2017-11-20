import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import styles from './App.module.css';

import theme from './theme';

import Counter from './_examples/components/Counter/Counter';
import Greeter from './_examples/components/Greeter/Greeter';
import MaterialHello from './_examples/components/MaterialHello/MaterialHello';

class App extends Component {

  renderHeader = () => (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>Welcome to React</h1>
    </header>
  )

  renderIntro() {
    return (
      <p className={styles.intro}>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    );
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.container}>
          {this.renderHeader()}
          {this.renderIntro()}
          <Greeter greeting={'Hello'} />
          <Counter />
          <MaterialHello />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
