import React from "react";

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
