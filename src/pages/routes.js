import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "@/UI/header";
import Footer from "@/UI/footer";

const Home = lazy(() => import("./home"));
const Dashboard = lazy(() => import("./dashboard"));
const Profile = lazy(() => import("./profile"));
const Add = lazy(() => import("./add"));

const Routes = () => {
  const auth = useSelector(({ user }) => user.isAuth);
  let routes;

  if (auth) {
    routes = (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/add" component={Add} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/profile" />
        </Switch>
        <Footer />
      </>
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
