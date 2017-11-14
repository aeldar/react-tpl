import * as React from 'react';

import styles from './Counter.module.css';

interface State {
  secondsSinceReload: number;
}

export class Counter extends React.Component<{}, State> {

  interval: number;

  state = {
    secondsSinceReload: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000) as any;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimer = () => {
    this.setState(({ secondsSinceReload }) => ({ secondsSinceReload: secondsSinceReload + 1 }));
  }

  render() {
    return (
      <p className={styles.container}>
        <strong>{this.state.secondsSinceReload}</strong> seconds since the last cold reload.
      </p>
    );
  }
}

export default Counter;
