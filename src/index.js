import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import "./index.css";
import SingleProject from "./pages/SingleProjectPage";
import All from "./pages/All";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={All} />
      <Route path="/single" component={SingleProject} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
