import React from "react";
import "./Group14.css";

function Group14(props) {
  const { className } = props;

  return (
    <div className={`group-14 ${className || ""}`}>
      <img className="group-12" src="/img/group-12@2x.png" alt="Group 12" />
      <p className="search-anything-from opensans-normal-vulcan-16px">
        Search anything from Item names or Customer names
      </p>
    </div>
  );
}

export default Group14;
