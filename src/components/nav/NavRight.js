import React from "react";
import { Link } from "react-router-dom";

export default function NavRight() {
  return (
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
  );
}
