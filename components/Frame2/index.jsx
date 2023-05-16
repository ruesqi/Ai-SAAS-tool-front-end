import React from "react";
import "./Frame2.css";

function Frame2(props) {
  const { className } = props;

  return (
    <div className={`frame-2-3 ${className || ""}`}>
      <div className="last-week-sales opensans-semi-bold-vulcan-20px">Last week Sales</div>
      <div className="group-35-3"></div>
    </div>
  );
}

export default Frame2;
