import React from "react";
import "./Group5422.css";

function Group5422(props) {
  const { newCustomers, className } = props;

  return (
    <div className={`group-5-8-1 opensans-semi-bold-cobalt-16px ${className || ""}`}>
      <div className="new-customers-1">{newCustomers}</div>
      <div className="number-44">0</div>
      <div className="group-52-7"></div>
    </div>
  );
}

export default Group5422;
