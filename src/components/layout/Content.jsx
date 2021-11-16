import React from "react";
import "./Content.css";
import { Route, Switch } from "react-router-dom";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";

const Content = (props) => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </main>
);

export default Content;
