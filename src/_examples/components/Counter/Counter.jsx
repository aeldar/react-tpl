// @flow
import React from 'react';

import './Counter.css';

type State = {
  secondsSinceReload: number,
}

export class Counter extends React.Component<{}, State> {

  interval: number;

  state = {
    secondsSinceReload: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimer = () => {
    this.setState(({ secondsSinceReload }) => ({ secondsSinceReload: secondsSinceReload + 1}));
  };

  render() {
    return (
      <p className="Counter">
        <strong>{this.state.secondsSinceReload}</strong> seconds since the last cold reload.
      </p>
    )
  }
}

export default Counter;
