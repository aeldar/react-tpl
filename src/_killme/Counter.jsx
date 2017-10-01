// @flow

import * as React from 'react';

type Props = {
  greeting: string,
  name?: string,
}

const Counter = ({ greeting, name }: Props): React.Node => (
  <div>{greeting||'Hello'}, {name||'World'}!</div>
);

export default Counter;
