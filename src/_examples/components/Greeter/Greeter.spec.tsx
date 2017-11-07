import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Greeter />, div);
});
