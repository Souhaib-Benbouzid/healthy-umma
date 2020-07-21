import React from "react";
import ReactDOM from "react-dom";
import "./static/style/styles.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

import { App } from "./apps";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
