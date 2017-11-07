import * as React from 'react';

import styles from './Greeter.css';

type Mood = 'Fast'|'Furious'

type Props = {
  /** The first part of the greeting */
  greeting?: string,
  name?: string,
  mood?: Mood,
}

const Greeter = ({ greeting = 'Hello', name = 'World' }: Props): React.Node => (
  <div className={styles.container}>{greeting}, {name}!</div>
);

export default Greeter;
