import React from "react";
import "../styles/navbar.css";

function Navbar(props) {
  return (
    <div className="container">
      <div className="left">
        <div className="section-left">
          <p>Dynamic right section selection</p>
        </div>
      </div>
      <div className="right">
        <div className="section-right-1">
          <p className="selecton-right">.me()</p>
        </div>
        <div className="section-right-2">
          <p className="selection-right">.portfolio()</p>
        </div>
        <div className="section-right-3">
          <p className="selection-right">.myLearning()</p>
        </div>
        <div className="section-right-4">
          <p className="selection-right">.contactMe()</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
