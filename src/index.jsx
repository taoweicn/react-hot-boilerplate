import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const root = document.createElement('div');
document.body.appendChild(root);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    /* eslint-disable */
    const nextApp = require('./App');
    /* eslint-enable */
    render(nextApp.default);
  });
}
