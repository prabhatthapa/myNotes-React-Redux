// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./containers/app/app.container";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
);
