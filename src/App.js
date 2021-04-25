import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/nav/Navbar";
import Me from "./pages/Me";
import Portfolio from "./pages/Portfolio";
import MyLearning from "./pages/MyLearning";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar className="nav-bar" />
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
