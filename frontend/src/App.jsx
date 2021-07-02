import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./homepage";

import SignIn from "./auth/signin";
import SignUp from "./auth/signup";

import axios from "axios";
axios.defaults.baseURL = "/api";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
