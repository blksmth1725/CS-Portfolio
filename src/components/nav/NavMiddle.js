import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavMiddle() {
  return (
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
  );
}
