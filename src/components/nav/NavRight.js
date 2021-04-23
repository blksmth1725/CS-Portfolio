import React from "react";
import { Link } from "react-router-dom";
import db from "../../staticData/db";
import "../../styles/components/navbar.css";

export default function NavRight() {
  const data = db.christianSheen.pages;

  return (
    <div className="right-set">
      {data.map((page) => {
        return (
          <Link to={page.nav.to} className={page.nav.classname}>
            <h4 className={page.classname}>{page.title}</h4>
          </Link>
        );
      })}
    </div>
  );
}
