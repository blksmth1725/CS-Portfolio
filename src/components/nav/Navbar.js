import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import db from "../../staticData/db";

function Navbar(props) {
  const data = db.christianSheen.pages;
  const logoLeft = { profileOwner: "{Christian Sheen}" };
  return (
    <nav className="nav-container">
      <div className="left-set">
        <div className="text-left">
          <p className="nav-txt">{logoLeft.profileOwner}</p>
        </div>
      </div>

      <div className="middle-set">
        <a href="https://www.linkedin.com/in/csheen/" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="font-awesome-brand-icon"
          />
        </a>
        <a href="https://github.com/blksmth1725" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className="font-awesome-brand-icon"
          />
        </a>
      </div>

      <div className="right-set">
        {data.map((page) => {
          return (
            <Link to={page.nav.to} className={page.nav.classname}>
              <h4 className={page.classname}>{page.title}</h4>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
