import React from "react";
import { Link } from "react-router-dom";
import db from "../../staticData/db";

export default function NavRight(onSelectTab) {
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
