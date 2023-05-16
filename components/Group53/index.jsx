import React from "react";
import "./Group53.css";

function Group53(props) {
  const { arabicaCoffeeBeans, className } = props;

  return (
    <div className={`group-53-1 ${className || ""}`}>
      <div className="arabica-coffee-beans opensans-normal-vulcan-16px">{arabicaCoffeeBeans}</div>
      <div className="group-52"></div>
    </div>
  );
}

export default Group53;
