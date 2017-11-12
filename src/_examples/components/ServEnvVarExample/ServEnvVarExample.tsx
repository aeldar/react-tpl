import * as React from 'react';

import styles from './ServEnvVarExample.module.css';

export const ServEnvVarExample: React.SFC = () => (
  <p className={styles.container}>
    {window.env && window.env.REACT_APP_GREETING
      ? <span className={styles.greeting}>{window.env.REACT_APP_GREETING}</span>
      : (
        <span className={styles.stub}>
            Please set <code>REACT_APP_GREETING</code> environment variable on your
            app server.
          </span>
      )
    }
  </p>
);

export default ServEnvVarExample;
