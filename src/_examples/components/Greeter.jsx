// @flow

import * as React from 'react';

type Mood = 'Fast'|'Furious'

type Props = {
  /** The first part of the greeting */
  greeting?: string,
  name?: string,
  mood?: Mood,
}

const Greeter = ({ greeting = 'Hello', name = 'World' }: Props): React.Node => (
  <div>{greeting}, {name}!</div>
);

export default Greeter;
