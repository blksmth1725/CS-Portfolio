import React, { Fragment } from "react";
import Navbar from "./components/nav/Navbar";
import Me from "./components/pages/Me";
import Portfolio from "./components/pages/Portfolio";
import MyLearning from "./components/pages/MyLearning";
import ContactMe from "./components/pages/ContactMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/styles/app.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Me} />
        <section className="container">
          <Switch>
            <Route exact path="/me" component={Me} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/myLearning" component={MyLearning} />
            <Route exact path="/contactMe" component={ContactMe} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
