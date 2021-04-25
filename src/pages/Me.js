import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Me(props) {
  return (
    <div className="page-container">
      <div className="title-container">
        <h1 className="title">.me()</h1>
      </div>
      <div className="download-link">
        <button>
          <FontAwesomeIcon icon="download" className="font-awesome-icon" />
          <a href="../../staticData/pdf" title="CS_CV" download>
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Me;
