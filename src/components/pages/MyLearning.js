import React from "react";
import db from "../../staticData/db";

function MyLearning(props) {
  const data = db.christianSheen.pages;

  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="title">.myLearning()</h1>
      </div>
      <div className="technical-skills">
        {data.map((page) => {
          if (page.title === ".myLearning()") {
            return page.content.technologies.map((tech) => {
              return <h3>{tech.title}</h3>;
            });
          }
        })}
      </div>
      <div className="books"></div>
      <div className="academia"></div>
    </div>
  );
}

export default MyLearning;
