//@flow
import React from 'react';

import './ServEnvVarExample.css';

export const ServEnvVarExample = () => (
  <p className="ServEnvVarExample">
    {window.env && window.env.REACT_APP_GREETING
      ? <span className="ServEnvVarExample__greeting">{window.env.REACT_APP_GREETING}</span>
      : (
        <span className="ServEnvVarExample__stub">
            Please set <code>REACT_APP_GREETING</code> environment variable on your
            app server.
          </span>
      )
    }
  </p>
);

export default ServEnvVarExample;
