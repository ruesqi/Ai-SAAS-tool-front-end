import React from "react";
import "./Group47.css";

function Group47(props) {
  const { averageSale, price, className } = props;

  return (
    <div className={`group-4-1 ${className || ""}`}>
      <div className="average-sale opensans-normal-vulcan-14px">{averageSale}</div>
      <div className="price-9 opensans-semi-bold-vulcan-24px">{price}</div>
    </div>
  );
}

export default Group47;
