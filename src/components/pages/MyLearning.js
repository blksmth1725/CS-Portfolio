import React from "react";
import db from "../../staticData/db";
import "../../styles/components/page.css";

function MyLearning(props) {
  const data = db.christianSheen.pages;

  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="title">.myLearning()</h1>
      </div>
      <div className="text">
        {data.map((page) => (page.content.text ? page.content.text : ""))}
      </div>
      <div className="technical-skills">
        {data.map((page) => {
          if (page.title === ".myLearning()") {
            return page.content.technologies.map((tech) => {
              return (
                <div className="card-info">
                  <h3 className="tech-title">{tech.title}</h3>
                </div>
              );
            });
          }
        })}
      </div>
      <div className="books"></div>
      <div className="academia"></div>
    </div>
  );
}
console.log("for commit");

export default MyLearning;
