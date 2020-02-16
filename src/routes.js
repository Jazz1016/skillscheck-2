import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Home from "./Home";
import Dashboard from "./components/Dashboard/Dashboard";
import DashHolder from "./components/DashHolder";
import Product from "./components/Product/Product";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/form" component={Form} />
    <Route path="/inv" render={props => <Dashboard {...props} />} />
    {/* <Route path="/inv/product/:id" component={Product} /> */}
  </Switch>
);
