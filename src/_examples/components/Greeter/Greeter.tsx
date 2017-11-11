import * as React from 'react';
import { pure } from 'recompose';

import styles from './Greeter.css';

type Mood = 'Fast'|'Furious';

interface Props {
  /** The first part of the greeting */
  greeting?: string;
  name?: string;
  mood?: Mood;
}

export const Greeter: React.SFC<Props> = ({ greeting = 'Hello', name = 'World' }) => (
  <div className={styles.container}>{greeting}, {name}!</div>
);

export default pure(Greeter);
