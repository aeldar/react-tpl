import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');
const renderApp = (Component) => {
  ReactDOM.render(<Component />, rootEl);
};

renderApp(App);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(App, () => renderApp(App));
  }
}

registerServiceWorker();
