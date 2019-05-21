import React from "react";
import Home from "./Home/Home";
import Photography from "./Photography/Photography";
import Software from "./Software/Software";
import Films from "./Films/Films";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import "./rootRoutes.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Routes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="page">
              <Switch location={location}>
                <Route exact path="/" component={Home} />

                <Route exact path="/photography" component={Photography} />
                <Route exact path="/software" component={Software} />
                <Route exact path="/films" component={Films} />

                <Redirect from="/" to="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </React.Fragment>
  );
};

export default Routes;
