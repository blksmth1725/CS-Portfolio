import React from "react";
import "../../styles/components/navbar.css";
import "../../styles/app.css";

import NavLeft from "./NavLeft";
import NavMiddle from "./NavMiddle";
import NavRight from "./NavRight";

function Navbar(props) {
  return (
    <nav className="nav-container">
      <NavLeft />
      <NavMiddle />
      <NavRight />
    </nav>
  );
}

export default Navbar;
