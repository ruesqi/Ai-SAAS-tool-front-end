import React from "react";
import { Link } from "react-router-dom";
import Group14 from "../Group14";
import Group20 from "../Group20";
import Group19 from "../Group19";
import Group18 from "../Group18";
import Frame93 from "../Frame93";
import Group31 from "../Group31";
import "./InventoryAdvanceAnalyticsPage.css";

function InventoryAdvanceAnalyticsPage(props) {
  const {
    group90,
    optimizeAi,
    title,
    group35,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    coffeeBeans,
    milk,
    cups,
    napkin,
    sweetener,
    straws,
    place1,
    previousMonth,
    presentMonth,
    nextMonth,
    spanText1,
    spanText2,
    spanText3,
    orderedQuantity,
    itemNames,
    requiredItemListForNextMonth,
    iconHome,
    place2,
    group33,
    salesManagement,
    group39,
    fraudAndSecurityDetection,
    frame93Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inventory-advance-analytics-page screen">
        <div className="group-75-3">
          <Link to="/home-page">
            <div className="group-92-5">
              <img className="group-90-7" src={group90} alt="Group 90" />
              <div className="optimize-ai-7 opensans-semi-bold-vulcan-14-6px">{optimizeAi}</div>
            </div>
          </Link>
          <Group14 />
          <Group20 />
          <Group19 />
          <Group18 />
        </div>
        <h1 className="title-5 opensans-semi-bold-vulcan-32px">{title}</h1>
        <div className="overlap-group1-4">
          <div className="group-147">
            <Frame93 className={frame93Props.className} />
            <div className="group-35-6" style={{ backgroundImage: `url(${group35})` }}></div>
          </div>
          <div className="group-167">
            <div className="number-container-2 opensans-semi-bold-vulcan-16px">
              <div className="number-19">{number1}</div>
              <div className="number-19">{number2}</div>
              <div className="number-19">{number3}</div>
              <div className="number-19">{number4}</div>
              <div className="number-19">{number5}</div>
              <div className="number-19">{number6}</div>
            </div>
            <div className="flex-col-15">
              <div className="overlap-group-2">
                <img className="line-25" src="/img/line-25.svg" alt="Line 25" />
                <img className="line-26" src="/img/line-26.svg" alt="Line 26" />
                <img className="line-34" src="/img/line-34.svg" alt="Line 34" />
                <img className="line-35" src="/img/line-34.svg" alt="Line 35" />
                <img className="line-36" src="/img/line-34.svg" alt="Line 36" />
                <img className="line-37" src="/img/line-34.svg" alt="Line 37" />
                <img className="line-38" src="/img/line-34.svg" alt="Line 38" />
                <img className="line-39" src="/img/line-34.svg" alt="Line 39" />
                <img className="line-27" src="/img/line-27.svg" alt="Line 27" />
                <img className="line-40" src="/img/line-40.svg" alt="Line 40" />
                <img className="line-41" src="/img/line-40.svg" alt="Line 41" />
                <img className="line-42" src="/img/line-40.svg" alt="Line 42" />
                <img className="line-43" src="/img/line-40.svg" alt="Line 43" />
                <img className="line-44" src="/img/line-40.svg" alt="Line 44" />
                <img className="line-45" src="/img/line-40.svg" alt="Line 45" />
                <img className="line-28" src="/img/line-27.svg" alt="Line 28" />
                <img className="line-29" src="/img/line-27.svg" alt="Line 29" />
                <img className="line-30" src="/img/line-27.svg" alt="Line 30" />
                <img className="line-31" src="/img/line-27.svg" alt="Line 31" />
                <img className="line-32" src="/img/line-27.svg" alt="Line 32" />
                <img className="line-33" src="/img/line-27.svg" alt="Line 33" />
                <div className="group-156">
                  <div className="rectangle-55"></div>
                  <div className="rectangle-56-1"></div>
                  <div className="rectangle-57"></div>
                </div>
                <div className="group-157">
                  <div className="rectangle-55-1"></div>
                  <div className="rectangle-56"></div>
                  <div className="rectangle-57-1"></div>
                </div>
                <div className="group-158">
                  <div className="rectangle-55-2"></div>
                  <div className="rectangle-56-2"></div>
                  <div className="rectangle-57-2"></div>
                </div>
                <div className="group-159">
                  <div className="rectangle-55"></div>
                  <div className="rectangle-56"></div>
                  <div className="rectangle-57-3"></div>
                </div>
                <div className="group-160">
                  <div className="rectangle-55-3"></div>
                  <div className="rectangle-56-3"></div>
                  <div className="rectangle-57-4"></div>
                </div>
                <div className="group-161">
                  <div className="rectangle-55-4"></div>
                  <div className="rectangle-56-4"></div>
                  <div className="rectangle-57-5"></div>
                </div>
                <div className="group-162">
                  <div className="rectangle-55-5"></div>
                  <div className="rectangle-56-5"></div>
                  <div className="rectangle-57-6"></div>
                </div>
              </div>
              <div className="flex-row-8 opensans-semi-bold-vulcan-16px">
                <div className="coffee-beans">{coffeeBeans}</div>
                <div className="milk-2">{milk}</div>
                <div className="cups">{cups}</div>
                <div className="napkin">{napkin}</div>
                <div className="sweetener-2">{sweetener}</div>
                <div className="straws">{straws}</div>
                <div className="place-5">{place1}</div>
              </div>
            </div>
          </div>
          <div className="group-166">
            <div className="group-163">
              <div className="ellipse-25"></div>
              <div className="previous-month opensans-semi-bold-vulcan-16px">{previousMonth}</div>
            </div>
            <div className="group-164">
              <div className="ellipse-25-1"></div>
              <div className="present-month opensans-semi-bold-vulcan-16px">{presentMonth}</div>
            </div>
            <div className="group-165">
              <div className="ellipse-25-2"></div>
              <div className="next-month opensans-semi-bold-vulcan-16px">{nextMonth}</div>
            </div>
          </div>
          <p className="based-on-the-average">
            <span className="span0">{spanText1}</span>
            <span className="span1-2">{spanText2}</span>
            <span className="span2-1">{spanText3}</span>
          </p>
          <div className="ordered-quantity opensans-semi-bold-vulcan-24px">{orderedQuantity}</div>
          <div className="item-names opensans-semi-bold-vulcan-24px">{itemNames}</div>
          <p className="required-item-list-for-next-month opensans-semi-bold-vulcan-24px">
            {requiredItemListForNextMonth}
          </p>
        </div>
        <Link to="/home-page">
          <div className="group-28-3">
            <img className="icon-home-3" src={iconHome} alt="icon-home" />
            <div className="place-6 opensans-semi-bold-cobalt-16px">{place2}</div>
          </div>
        </Link>
        <div className="rectangle-6-5"></div>
        <div className="rectangle-6-6"></div>
        <Group31 />
        <img className="vector-12" src="/img/vector.svg" alt="Vector" />
        <Link to="/sales-management-page">
          <div className="group-32-3">
            <img className="group-33" src={group33} alt="Group 33" />
            <div className="sales-management-3 opensans-semi-bold-cobalt-16px">{salesManagement}</div>
          </div>
        </Link>
        <Link to="/fraud-and-security-detection-page">
          <div className="group-51-3">
            <img className="group-39-3" src={group39} alt="Group 39" />
            <div className="fraud-and-security-detection-3 opensans-semi-bold-cobalt-15px">
              {fraudAndSecurityDetection}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InventoryAdvanceAnalyticsPage;
