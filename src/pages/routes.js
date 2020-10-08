import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Home = lazy(() => import("./home"));
const Dashboard = lazy(() => import("./dashboard"));

const Routes = () => {
  const auth = false;
  let routes;

  if (auth) {
    routes = (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Router>
      <Suspense fallback={<h2>Loading...</h2>}>{routes}</Suspense>
    </Router>
  );
};

export default Routes;
