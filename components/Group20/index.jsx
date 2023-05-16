import React from "react";
import "./Group20.css";

function Group20(props) {
  const { className } = props;

  return (
    <div className={`group-20 ${className || ""}`}>
      <div className="group-15"></div>
      <div className="notification opensans-semi-bold-cobalt-16px">Notification</div>
    </div>
  );
}

export default Group20;
