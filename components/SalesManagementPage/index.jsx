import React from "react";
import { Link } from "react-router-dom";
import Group14 from "../Group14";
import Group20 from "../Group20";
import Group19 from "../Group19";
import Group18 from "../Group18";
import Frame93 from "../Frame93";
import Group42 from "../Group42";
import Group46 from "../Group46";
import Group47 from "../Group47";
import Frame94 from "../Frame94";
import Group542 from "../Group542";
import Group53 from "../Group53";
import "./SalesManagementPage.css";

function SalesManagementPage(props) {
  const {
    group90,
    optimizeAi,
    title,
    name,
    totalSalesOverTime,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    address1,
    address2,
    price,
    address3,
    address4,
    today,
    lastWednesday,
    todaySSale,
    topItemBySale,
    topCategoriesByItem,
    monthly,
    weekly,
    daily,
    orderSummary,
    x6K,
    x5K,
    x4K,
    x3K,
    x2K,
    x1K,
    apr5,
    apr10,
    apr15,
    apr20,
    apr25,
    apr30,
    iconHome,
    place,
    group30,
    inventoryManagement,
    group33,
    salesManagement,
    group39,
    fraudAndSecurityDetection,
    group471Props,
    group472Props,
    group5421Props,
    group5422Props,
    group5423Props,
    group5424Props,
    group5425Props,
    group5426Props,
    group5427Props,
    group531Props,
    group532Props,
    group533Props,
    group534Props,
    group535Props,
    group536Props,
    group537Props,
    group538Props,
    group539Props,
    group5310Props,
    group5311Props,
    group5312Props,
    group5313Props,
    group5314Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sales-management-page screen">
        <div className="group-75-1">
          <Link to="/home-page">
            <div className="group-92-1">
              <img className="group-90-2" src={group90} alt="Group 90" />
              <div className="optimize-ai-2 opensans-semi-bold-vulcan-14-6px">{optimizeAi}</div>
            </div>
          </Link>
          <Group14 />
          <Group20 />
          <Group19 />
          <Group18 />
        </div>
        <h1 className="title-2 opensans-semi-bold-vulcan-32px">{title}</h1>
        <div className="overlap-group6">
          <div className="flex-col-1">
            <div className="flex-col-2">
              <Frame93 />
              <div className="frame-2-1">
                <div className="name opensans-semi-bold-cobalt-20px">{name}</div>
                <div className="group-35"></div>
              </div>
              <div className="group-49">
                <Group42 />
                <Group46 />
                <Group47 averageSale={group471Props.averageSale} price={group471Props.price} />
                <Group47
                  averageSale={group472Props.averageSale}
                  price={group472Props.price}
                  className={group472Props.className}
                />
              </div>
              <div className="total-sales-over-time opensans-normal-vulcan-14px">{totalSalesOverTime}</div>
            </div>
            <div className="flex-row">
              <div className="number-container opensans-normal-vulcan-12px">
                <div className="number-2">{number1}</div>
                <div className="number">{number2}</div>
                <div className="number-1">{number3}</div>
                <div className="number">{number4}</div>
                <div className="number">{number5}</div>
                <div className="number">{number6}</div>
                <div className="number-1">{number7}</div>
              </div>
              <div className="overlap-group1-1">
                <img className="vector-6" src="/img/vector-6.svg" alt="Vector 6" />
                <img className="line-1" src="/img/line-1.svg" alt="Line 1" />
                <img className="line-3" src="/img/line-1.svg" alt="Line 3" />
                <img className="line-4" src="/img/line-1.svg" alt="Line 4" />
                <img className="line-5" src="/img/line-1.svg" alt="Line 5" />
                <img className="line-6" src="/img/line-1.svg" alt="Line 6" />
                <img className="line-7" src="/img/line-1.svg" alt="Line 7" />
                <img className="line-8" src="/img/line-1.svg" alt="Line 8" />
                <img className="line-9" src="/img/line-1.svg" alt="Line 9" />
                <img className="line-2" src="/img/line-2.svg" alt="Line 2" />
                <img className="line-11" src="/img/line-2.svg" alt="Line 11" />
                <img className="line-12" src="/img/line-2.svg" alt="Line 12" />
                <img className="line-13" src="/img/line-2.svg" alt="Line 13" />
                <img className="line-14" src="/img/line-2.svg" alt="Line 14" />
                <img className="line-15" src="/img/line-2.svg" alt="Line 15" />
                <img className="line-16" src="/img/line-2.svg" alt="Line 16" />
                <img className="vector-5" src="/img/vector-5.svg" alt="Vector 5" />
                <div className="ellipse-13"></div>
                <div className="ellipse-14"></div>
                <div className="ellipse-19"></div>
                <div className="ellipse-20"></div>
                <div className="ellipse-21"></div>
                <div className="ellipse-15"></div>
                <div className="ellipse-16"></div>
                <div className="ellipse-17"></div>
                <div className="ellipse-18"></div>
              </div>
            </div>
            <div className="flex-col-3">
              <div className="flex-row-1 opensans-normal-vulcan-12px">
                <div className="number-3">{number8}</div>
                <div className="address">{address1}</div>
                <div className="address-1">{address2}</div>
                <div className="price">{price}</div>
                <div className="address-2">{address3}</div>
                <div className="address-3">{address4}</div>
              </div>
              <div className="group-container-4">
                <div className="group-44">
                  <div className="ellipse-19-1"></div>
                  <div className="today opensans-normal-vulcan-14px">{today}</div>
                </div>
                <div className="group-45">
                  <div className="ellipse-19-2"></div>
                  <div className="last-wednesday opensans-normal-vulcan-14px">{lastWednesday}</div>
                </div>
              </div>
              <Frame94 />
            </div>
          </div>
          <div className="group-148">
            <div className="frame-2">
              <div className="today-s-sale opensans-semi-bold-cobalt-20px">{todaySSale}</div>
              <div className="group-35"></div>
            </div>
            <Group542 newCustomers={group5421Props.newCustomers} />
            <img className="line" src="/img/line-17.svg" alt="Line 17" />
            <Group542 newCustomers={group5422Props.newCustomers} className={group5422Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 18" />
            <Group542 newCustomers={group5423Props.newCustomers} className={group5423Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 19" />
            <Group542 newCustomers={group5424Props.newCustomers} className={group5424Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 20" />
            <Group542 newCustomers={group5425Props.newCustomers} className={group5425Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 21" />
            <Group542 newCustomers={group5426Props.newCustomers} className={group5426Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 22" />
            <Group542 newCustomers={group5427Props.newCustomers} className={group5427Props.className} />
          </div>
          <div className="group-153">
            <div className="frame-2">
              <div className="top-item-by-sale opensans-semi-bold-vulcan-20px">{topItemBySale}</div>
              <div className="group-35-1"></div>
            </div>
            <Group53 arabicaCoffeeBeans={group531Props.arabicaCoffeeBeans} />
            <img className="line" src="/img/line-17.svg" alt="Line 17" />
            <Group53 arabicaCoffeeBeans={group532Props.arabicaCoffeeBeans} className={group532Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 18" />
            <Group53 arabicaCoffeeBeans={group533Props.arabicaCoffeeBeans} className={group533Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 19" />
            <Group53 arabicaCoffeeBeans={group534Props.arabicaCoffeeBeans} className={group534Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 20" />
            <Group53 arabicaCoffeeBeans={group535Props.arabicaCoffeeBeans} className={group535Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 21" />
            <Group53 arabicaCoffeeBeans={group536Props.arabicaCoffeeBeans} className={group536Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 22" />
            <Group53 arabicaCoffeeBeans={group537Props.arabicaCoffeeBeans} className={group537Props.className} />
          </div>
          <div className="group-154">
            <div className="frame-2">
              <div className="top-categories-by-item opensans-semi-bold-vulcan-20px">{topCategoriesByItem}</div>
              <div className="group-35-1"></div>
            </div>
            <Group53 arabicaCoffeeBeans={group538Props.arabicaCoffeeBeans} className={group538Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 17" />
            <Group53 arabicaCoffeeBeans={group539Props.arabicaCoffeeBeans} className={group539Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 18" />
            <Group53 arabicaCoffeeBeans={group5310Props.arabicaCoffeeBeans} className={group5310Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 19" />
            <Group53 arabicaCoffeeBeans={group5311Props.arabicaCoffeeBeans} className={group5311Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 20" />
            <Group53 arabicaCoffeeBeans={group5312Props.arabicaCoffeeBeans} className={group5312Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 21" />
            <Group53 arabicaCoffeeBeans={group5313Props.arabicaCoffeeBeans} className={group5313Props.className} />
            <img className="line" src="/img/line-17.svg" alt="Line 22" />
            <Group53 arabicaCoffeeBeans={group5314Props.arabicaCoffeeBeans} className={group5314Props.className} />
          </div>
          <div className="overlap-group2-1">
            <div className="group-150">
              <div className="rectangle-24"></div>
              <div className="monthly opensans-semi-bold-cobalt-14px">{monthly}</div>
            </div>
            <div className="weekly opensans-semi-bold-cobalt-14px">{weekly}</div>
            <div className="daily">{daily}</div>
          </div>
          <div className="order-summary opensans-semi-bold-vulcan-20px">{orderSummary}</div>
          <div className="group-152">
            <div className="flex-col-4 opensans-normal-vulcan-15-4px">
              <div className="x6k">{x6K}</div>
              <div className="flex-col-item">{x5K}</div>
              <div className="flex-col-item-1">{x4K}</div>
              <div className="flex-col-item-1">{x3K}</div>
              <div className="flex-col-item-1">{x2K}</div>
              <div className="flex-col-item">{x1K}</div>
            </div>
            <div className="flex-col-5">
              <div className="overlap-group4">
                <div className="overlap-group3-1">
                  <img className="line-19" src="/img/line-19-3.svg" alt="Line 19" />
                  <img className="line-20" src="/img/line-20-3.svg" alt="Line 20" />
                  <img className="line-21" src="/img/line-21-3.svg" alt="Line 21" />
                  <img className="line-22" src="/img/line-22-3.svg" alt="Line 22" />
                  <img className="line-23" src="/img/line-23.svg" alt="Line 23" />
                  <img className="line-24" src="/img/line-24.svg" alt="Line 24" />
                  <img className="line-17" src="/img/line-17-3.svg" alt="Line 17" />
                  <img className="line-18" src="/img/line-18-3.svg" alt="Line 18" />
                  <div className="rectangle-25"></div>
                  <div className="rectangle-30"></div>
                  <div className="rectangle-35"></div>
                  <div className="rectangle-40"></div>
                  <div className="rectangle-45"></div>
                  <div className="rectangle-50"></div>
                  <div className="rectangle-26"></div>
                  <div className="rectangle-31"></div>
                  <div className="rectangle-36"></div>
                  <div className="rectangle-41"></div>
                  <div className="rectangle-46"></div>
                  <div className="rectangle-51"></div>
                  <div className="rectangle-27"></div>
                  <div className="rectangle-32"></div>
                  <div className="rectangle-37"></div>
                  <div className="rectangle-42"></div>
                  <div className="rectangle-47"></div>
                  <div className="rectangle-52"></div>
                  <div className="rectangle-33"></div>
                  <div className="rectangle-38"></div>
                  <div className="rectangle-43"></div>
                  <div className="rectangle-48"></div>
                  <div className="rectangle-53"></div>
                  <div className="rectangle-29"></div>
                  <div className="rectangle-34"></div>
                  <div className="rectangle-39"></div>
                  <div className="rectangle-44"></div>
                  <div className="rectangle-49"></div>
                  <div className="rectangle-54"></div>
                </div>
                <div className="rectangle-28"></div>
              </div>
              <div className="apr-container opensans-normal-vulcan-15-4px">
                <div className="apr-5">{apr5}</div>
                <div className="apr-10">{apr10}</div>
                <div className="apr">{apr15}</div>
                <div className="apr">{apr20}</div>
                <div className="apr">{apr25}</div>
                <div className="apr">{apr30}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-184">
          <Link to="/home-page" className="align-self-flex-start">
            <div className="group-28-1">
              <img className="icon-home-1" src={iconHome} alt="icon-home" />
              <div className="place-1 opensans-semi-bold-cobalt-16px">{place}</div>
            </div>
          </Link>
          <Link to="/inventory-management-page">
            <div className="group-31-1">
              <img className="group-3-2" src={group30} alt="Group 30" />
              <div className="inventory-management-1 opensans-semi-bold-cobalt-16px">{inventoryManagement}</div>
            </div>
          </Link>
          <div className="flex-row-2">
            <div className="rectangle-6-2"></div>
            <div className="overlap-group5">
              <div className="group-32-1">
                <img className="group-3-2" src={group33} alt="Group 33" />
                <div className="sales-management-1 opensans-bold-athens-gray-16px">{salesManagement}</div>
              </div>
              <img className="vector-4" src="/img/vector-3.svg" alt="Vector" />
            </div>
          </div>
          <Link to="/fraud-and-security-detection-page">
            <div className="group-51-1">
              <img className="group-39-1" src={group39} alt="Group 39" />
              <div className="fraud-and-security-detection-1 opensans-semi-bold-cobalt-15px">
                {fraudAndSecurityDetection}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SalesManagementPage;
