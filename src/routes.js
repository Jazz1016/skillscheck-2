import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Product from "./components/Product/Product";

export default (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Route exact path="/inventory" component={Form} />
  </Switch>
);
