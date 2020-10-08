import React, { useCallback, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authed } from "@/store/actions/userActions";

const Home = lazy(() => import("./home"));
const Dashboard = lazy(() => import("./dashboard"));

const Routes = () => {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(authed());
  }, [stableDispatch]);

  const auth = useSelector(({ user }) => user.isAuth);
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
