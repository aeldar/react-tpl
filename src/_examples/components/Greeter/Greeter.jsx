// @flow
import * as React from 'react';

import './Greeter.css';

type Mood = 'Fast'|'Furious'

type Props = {
  /** The first part of the greeting */
  greeting?: string,
  name?: string,
  mood?: Mood,
}

const Greeter = ({ greeting = 'Hello', name = 'World' }: Props): React.Node => (
  <div className="greeter">{greeting}, {name}!</div>
);

export default Greeter;
