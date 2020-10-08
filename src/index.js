import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "@/scss/index.scss";

import firebase from "firebase/app";
import config from "@/firebase/config";

import App from "@/App.jsx";
import store from "@/store";

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
