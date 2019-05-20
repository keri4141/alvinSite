import React from "react";
import Home from "./Home/Home";
import Photography from "./Photography/Photography";
import Software from "./Software/Software";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Nav/Navbar";

const Routes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/photography" component={Photography} />
        <Route exact path="/software" component={Software} />

        <Redirect from="/" to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
