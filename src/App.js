import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/nav/Navbar";
import Body from "./components/nav/Body";
import Me from "./components/pages/Me";
import Portfolio from "./components/pages/Portfolio";
import MyLearning from "./components/pages/MyLearning";
import ContactMe from "./components/pages/ContactMe";

function App() {
  library.add(fab, faDownload);
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Body} />
        <section className="container">
          <Switch>
            <Route exact path="/me" component={Me} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/myLearning" component={MyLearning} />
            <Route exact path="/contactMe" component={ContactMe} />
          </Switch>
        </section>
        <Body />
      </Fragment>
    </Router>
  );
}

export default App;
