import * as React from 'react';
import { pure } from 'recompose';

import styles from './Greeter.module.css';

type Mood = 'Fast'|'Furious';

interface Props {
  /** The first part of the greeting */
  greeting?: string;
  name?: string;
  mood?: Mood;
}

export const Greeter: React.SFC<Props> = ({ greeting = 'Hello', name = 'World' }) => (
  <div className="container-fluid">
    <div className={styles.container}>{greeting}, {name}!</div>
  </div>
);

export default pure(Greeter);
