import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";
import App from "./root";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("main")
);
