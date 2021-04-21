import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import "../../styles/global.css";

function Navbar(props) {
  return (
    <nav className="nav-container">
      <div className="left-set">
        <div className="text-left">
          <p className="nav-txt">Dynamic right section selection</p>
        </div>
      </div>
      <div className="right-set">
        <Link to="/me" className="text-right">
          <p className="nav-txt">.me()</p>
        </Link>
        <Link to="/portfolio" className="text-right">
          <p className="nav-txt">.portfolio()</p>
        </Link>
        <Link to="/myLearning" className="text-right">
          <p className="nav-txt">.myLearning()</p>
        </Link>
        <Link to="/contactMe" className="text-right">
          <p className="nav-txt">.contactMe()</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
