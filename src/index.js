import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { rootReducers } from "./reducers/rootReducers";
import { logActions } from "./middlewares";

import thunk from "redux-thunk";

//Para que funcionen las dev tools
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logActions));

const store = createStore(rootReducers, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
