import React from 'react';
import ReactDOM from 'react-dom';
import {
  faHandPaper,
  faHandRock,
  faHandScissors
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import GlobalCSS from './global.css';

library.add(faHandScissors, faHandRock, faHandPaper);

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();
