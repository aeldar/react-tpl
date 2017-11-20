import React from 'react';
import ReactDOM from 'react-dom';
import MaterialHello from './MaterialHello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MaterialHello />, div);
});
