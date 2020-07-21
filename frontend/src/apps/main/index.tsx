import React, { Suspense, lazy } from "react";
import "./styles.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Nav from "./components/common/nav";
import Footer from "./components/common/footer";

const Landing = lazy(() => import("./pages/landing"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const HowTo = lazy(() => import("./pages/howTo"));
const SignIn = lazy(() => import("./pages/signIn"));
const SignUp = lazy(() => import("./pages/signUp"));
const Specialists = lazy(() => import("./pages/specialists"));

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/howto">
              <HowTo />
            </Route>
            <Route path="/dashboard">
              <Contact />
            </Route>
            <Route path="/dashboard">
              <SignIn />
            </Route>
            <Route path="/dashboard">
              <SignUp />
            </Route>
            <Route path="/specialists">
              <Specialists />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
