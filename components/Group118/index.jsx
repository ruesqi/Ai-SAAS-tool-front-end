import React from "react";
import "./Group118.css";

function Group118(props) {
  const { address, className } = props;

  return (
    <div className={`group-118 opensans-normal-vulcan-16px ${className || ""}`}>
      <div className="flex-row-26">
        <img className="ellipse-24-2" src="/img/ellipse-24-2.svg" alt="Ellipse 24" />
        <div className="group-100-1">
          <div className="arabica-coffee-beans-r_01 opensans-semi-bold-vulcan-18px">
            <span className="span-3 opensans-semi-bold-vulcan-18px">Arabica Coffee Beans </span>
            <span className="span-3 opensans-normal-vulcan-18px">(R_01)</span>
          </div>
          <p className="the-arabica-is-a-hig-1 opensans-normal-vulcan-15px">
            The Arabica is a high-quality bean. You can think of it as the Rolls Royce of the coffee beans.
            <br />
            It has a light, sweet and airy taste.
          </p>
        </div>
      </div>
      <div className="group-container-13">
        <div className="group-109-1">
          <div className="category-1">Category:</div>
          <div className="coffe-beans">Coffe Beans</div>
        </div>
        <div className="group-106-3">
          <div className="cost-1">Cost:</div>
          <div className="price-19">22.00 USD</div>
        </div>
      </div>
      <div className="group-container-14">
        <div className="group-110-1">
          <div className="sub-category-1">Sub-category:</div>
          <div className="arabica-beans-5">Arabica Beans</div>
        </div>
        <div className="group-107-1">
          <div className="margin-1">Margin:</div>
          <div className="percent-5">40%</div>
        </div>
      </div>
      <div className="group-container-15">
        <div className="group-111-1 opensans-normal-vulcan-16px">
          <div className="product-size-1">Product Size:</div>
          <div className="medium-2">Medium</div>
        </div>
        <div className="group-108-1">
          <div className="price-20 opensans-normal-vulcan-16px">Price:</div>
          <div className="price-21 opensans-semi-bold-vulcan-16px">30.80 USD</div>
        </div>
      </div>
      <div className="group-112">
        <div className="colour opensans-normal-black-16px">Colour:</div>
        <div className="dark-brown opensans-normal-vulcan-16px">Dark Brown</div>
      </div>
      <div className="group-container-16">
        <div className="group-105-1">
          <div className="shelf-life-1 opensans-normal-vulcan-16px">Shelf Life:</div>
          <div className="address-13 opensans-semi-bold-vulcan-16px">{address}</div>
        </div>
        <img className="group-113" src="/img/group-113@2x.png" alt="Group 113" />
        <img className="group-114-2" src="/img/group-114@2x.png" alt="Group 114" />
      </div>
    </div>
  );
}

export default Group118;
