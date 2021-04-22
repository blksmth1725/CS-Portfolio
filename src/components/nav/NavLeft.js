import React from "react";

export default function NavLeft() {
  const logoLeft = {
    profileOwner: "{ Christian Sheen }",
  };
  return (
    <div>
      <div className="left-set">
        <div className="text-left">
          <p className="nav-txt">{logoLeft.profileOwner}</p>
        </div>
      </div>
    </div>
  );
}
