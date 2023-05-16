import React from "react";
import { Link } from "react-router-dom";
import Group75 from "../Group75";
import Frame93 from "../Frame93";
import Group42 from "../Group42";
import Group46 from "../Group46";
import Group47 from "../Group47";
import Frame94 from "../Frame94";
import Frame2 from "../Frame2";
import Group542 from "../Group542";
import Group70 from "../Group70";
import "./HomePage.css";

function HomePage(props) {
  const {
    title,
    inventoryOverview1,
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
    price1,
    address3,
    address4,
    today1,
    lastWednesday,
    inventoryOverview2,
    totalCustomers1,
    totalCustomers2,
    number9,
    today2,
    paymentTypes,
    noSalesYetToday,
    topItemBySales,
    noItemSalesToday1,
    topCategoriesByItem,
    noItemSalesToday2,
    iconHome,
    place1,
    group30,
    inventoryManagement,
    group33,
    salesManagement,
    group39,
    fraudAndSecurityDetection,
    totalPurchase,
    price2,
    totalPurchaseDue,
    price3,
    totalSuppliers,
    number10,
    currentStockLevels,
    itemName1,
    number11,
    milk1,
    number12,
    napkins1,
    number13,
    arabicaBeans1,
    number14,
    place2,
    number15,
    sweetener1,
    stockKeepingUnitSku,
    number16,
    number17,
    number18,
    number19,
    number20,
    stockAvailability,
    itemName2,
    number21,
    milk2,
    number22,
    napkins2,
    number23,
    arabicaBeans2,
    number24,
    place3,
    number25,
    sweetener2,
    leadTimeInDays,
    number26,
    number27,
    number28,
    number29,
    number30,
    group471Props,
    group472Props,
    frame94Props,
    group5421Props,
    group5422Props,
    group5423Props,
    group5424Props,
    group5425Props,
    group5426Props,
    group701Props,
    group702Props,
    group703Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-page screen">
        <Group75 />
        <div className="flex-row-3">
          <div className="flex-col-6 opensans-semi-bold-vulcan-32px">
            <h1 className="title-3">{title}</h1>
            <div className="over-container">
              <div className="inventory-overview">{inventoryOverview1}</div>
              <div className="flex-col-7">
                <div className="flex-col-8">
                  <Frame93 />
                  <div className="frame-2-2">
                    <div className="name-1 opensans-semi-bold-cobalt-20px">{name}</div>
                    <div className="group-35-2"></div>
                  </div>
                  <div className="group-49-1">
                    <Group42 />
                    <Group46 />
                    <Group47 averageSale={group471Props.averageSale} price={group471Props.price} />
                    <Group47
                      averageSale={group472Props.averageSale}
                      price={group472Props.price}
                      className={group472Props.className}
                    />
                  </div>
                  <div className="total-sales-over-time-1 opensans-normal-vulcan-14px">{totalSalesOverTime}</div>
                </div>
                <div className="flex-row-4">
                  <div className="number-container-1 opensans-normal-vulcan-12px">
                    <div className="number-15">{number1}</div>
                    <div className="number-9">{number2}</div>
                    <div className="number-10">{number3}</div>
                    <div className="number-9">{number4}</div>
                    <div className="number-9">{number5}</div>
                    <div className="number-9">{number6}</div>
                    <div className="number-10">{number7}</div>
                  </div>
                  <div className="overlap-group1-2">
                    <img className="vector-6-1" src="/img/vector-6.svg" alt="Vector 6" />
                    <img className="line-1-1" src="/img/line-1.svg" alt="Line 1" />
                    <img className="line-3-1" src="/img/line-1.svg" alt="Line 3" />
                    <img className="line-4-1" src="/img/line-1.svg" alt="Line 4" />
                    <img className="line-5-1" src="/img/line-1.svg" alt="Line 5" />
                    <img className="line-6-1" src="/img/line-1.svg" alt="Line 6" />
                    <img className="line-7-1" src="/img/line-1.svg" alt="Line 7" />
                    <img className="line-8-1" src="/img/line-1.svg" alt="Line 8" />
                    <img className="line-9-1" src="/img/line-1.svg" alt="Line 9" />
                    <img className="line-2-1" src="/img/line-2.svg" alt="Line 2" />
                    <img className="line-11-1" src="/img/line-2.svg" alt="Line 11" />
                    <img className="line-12-1" src="/img/line-2.svg" alt="Line 12" />
                    <img className="line-13-1" src="/img/line-2.svg" alt="Line 13" />
                    <img className="line-14-1" src="/img/line-2.svg" alt="Line 14" />
                    <img className="line-15-1" src="/img/line-2.svg" alt="Line 15" />
                    <img className="line-16-1" src="/img/line-2.svg" alt="Line 16" />
                    <img className="vector-5-1" src="/img/vector-5.svg" alt="Vector 5" />
                    <div className="ellipse-13-1"></div>
                    <div className="ellipse-14-1"></div>
                    <div className="ellipse-19-3"></div>
                    <div className="ellipse-20-1"></div>
                    <div className="ellipse-21-1"></div>
                    <div className="ellipse-15-1"></div>
                    <div className="ellipse-16-1"></div>
                    <div className="ellipse-17-1"></div>
                    <div className="ellipse-18-1"></div>
                  </div>
                </div>
                <div className="flex-col-9">
                  <div className="flex-row-5 opensans-normal-vulcan-12px">
                    <div className="number-16">{number8}</div>
                    <div className="address-4">{address1}</div>
                    <div className="address-5">{address2}</div>
                    <div className="price-13">{price1}</div>
                    <div className="address-6">{address3}</div>
                    <div className="address-7">{address4}</div>
                  </div>
                  <div className="group-container-5">
                    <div className="group-44-1">
                      <div className="ellipse-19-4"></div>
                      <div className="today-1 opensans-normal-vulcan-14px">{today1}</div>
                    </div>
                    <div className="group-45-1">
                      <div className="ellipse-19-5"></div>
                      <div className="last-wednesday-1 opensans-normal-vulcan-14px">{lastWednesday}</div>
                    </div>
                  </div>
                  <Frame94 className={frame94Props.className} />
                </div>
              </div>
            </div>
            <div className="inventory-overview-1">{inventoryOverview2}</div>
          </div>
          <div className="group-60">
            <Frame2 />
            <div className="group-53-3 opensans-semi-bold-cobalt-16px">
              <div className="total-customers-container">
                <div className="total-customers">{totalCustomers1}</div>
                <div className="total-customers">{totalCustomers2}</div>
              </div>
              <div className="number-17">{number9}</div>
              <div className="group-52-4"></div>
            </div>
            <img className="line-10" src="/img/line-17.svg" alt="Line 17" />
            <Group542 newCustomers={group5421Props.newCustomers} className={group5421Props.className} />
            <img className="line-10" src="/img/line-17.svg" alt="Line 18" />
            <Group542 newCustomers={group5422Props.newCustomers} className={group5422Props.className} />
            <img className="line-10" src="/img/line-17.svg" alt="Line 19" />
            <Group542 newCustomers={group5423Props.newCustomers} className={group5423Props.className} />
            <img className="line-10" src="/img/line-17.svg" alt="Line 20" />
            <Group542 newCustomers={group5424Props.newCustomers} className={group5424Props.className} />
            <img className="line-10" src="/img/line-17.svg" alt="Line 21" />
            <Group542 newCustomers={group5425Props.newCustomers} className={group5425Props.className} />
            <img className="line-10" src="/img/line-17.svg" alt="Line 22" />
            <Group542 newCustomers={group5426Props.newCustomers} className={group5426Props.className} />
          </div>
          <div className="overlap-group2-2">
            <div className="today-2 opensans-semi-bold-vulcan-20px">{today2}</div>
            <div className="group-65">
              <div className="group-62">
                <div className="payment-types opensans-semi-bold-cobalt-20px">{paymentTypes}</div>
                <div className="group-52-2"></div>
              </div>
              <div className="x-sales opensans-normal-vulcan-18px">{noSalesYetToday}</div>
            </div>
            <div className="group-66">
              <div className="group-63">
                <div className="top-item-by-sales opensans-semi-bold-cobalt-20px">{topItemBySales}</div>
                <div className="group-52-2"></div>
              </div>
              <div className="x-sales opensans-normal-vulcan-18px">{noItemSalesToday1}</div>
            </div>
            <div className="group-67">
              <div className="group-64">
                <div className="top-categories-by-item-1 opensans-semi-bold-cobalt-20px">{topCategoriesByItem}</div>
                <div className="group-52-2"></div>
              </div>
              <div className="x-sales opensans-normal-vulcan-18px">{noItemSalesToday2}</div>
            </div>
          </div>
        </div>
        <div className="rectangle-6-3"></div>
        <div className="rectangle-6-4"></div>
        <div className="group-28-2">
          <img className="icon-home-2" src={iconHome} alt="icon-home" />
          <div className="place-2 opensans-bold-athens-gray-16px">{place1}</div>
        </div>
        <img className="vector-7" src="/img/vector-3.svg" alt="Vector" />
        <Link to="/inventory-management-page">
          <div className="group-31-2">
            <img className="group-3-3" src={group30} alt="Group 30" />
            <div className="inventory-management-2 opensans-semi-bold-cobalt-16px">{inventoryManagement}</div>
          </div>
        </Link>
        <Link to="/sales-management-page">
          <div className="group-32-2">
            <img className="group-3-3" src={group33} alt="Group 33" />
            <div className="sales-management-2 opensans-semi-bold-cobalt-16px">{salesManagement}</div>
          </div>
        </Link>
        <Link to="/fraud-and-security-detection-page">
          <div className="group-51-2">
            <img className="group-39-2" src={group39} alt="Group 39" />
            <div className="fraud-and-security-detection-2 opensans-semi-bold-cobalt-15px">
              {fraudAndSecurityDetection}
            </div>
          </div>
        </Link>
        <div className="group-container-6">
          <div className="group">
            <Group70 src={group701Props.src} />
            <div className="group-71">
              <div className="total opensans-normal-vulcan-16px">{totalPurchase}</div>
              <div className="price-14 opensans-semi-bold-vulcan-32px">{price2}</div>
            </div>
          </div>
          <div className="group">
            <Group70 src={group702Props.src} />
            <div className="group-71-1">
              <div className="total opensans-normal-vulcan-16px">{totalPurchaseDue}</div>
              <div className="price-15 opensans-semi-bold-vulcan-32px">{price3}</div>
            </div>
          </div>
          <div className="group">
            <Group70 src={group703Props.src} />
            <div className="group-71-2">
              <div className="total opensans-normal-vulcan-16px">{totalSuppliers}</div>
              <div className="number-18 opensans-semi-bold-vulcan-32px">{number10}</div>
            </div>
          </div>
        </div>
        <div className="group-155">
          <div className="flex-row-6">
            <div className="flex-col-10">
              <div className="current-stock-levels opensans-semi-bold-vulcan-20px">{currentStockLevels}</div>
              <div className="item-name opensans-normal-vulcan-16px">{itemName1}</div>
              <div className="group-76">
                <div className="number-11 opensans-normal-vulcan-16px">{number11}</div>
                <div className="milk opensans-semi-bold-vulcan-16px">{milk1}</div>
              </div>
              <div className="group-78">
                <div className="number-11 opensans-normal-vulcan-16px">{number12}</div>
                <div className="napkins opensans-semi-bold-vulcan-16px">{napkins1}</div>
              </div>
              <div className="group-80">
                <div className="number-11 opensans-normal-vulcan-16px">{number13}</div>
                <div className="arabica-beans opensans-semi-bold-vulcan-16px">{arabicaBeans1}</div>
              </div>
              <div className="group-82">
                <div className="number-11 opensans-normal-vulcan-16px">{number14}</div>
                <div className="place-3 opensans-semi-bold-vulcan-16px">{place2}</div>
              </div>
              <div className="group-84">
                <div className="number-11 opensans-normal-vulcan-16px">{number15}</div>
                <div className="sweetener opensans-semi-bold-vulcan-16px">{sweetener1}</div>
              </div>
            </div>
            <div className="flex-col-11">
              <div className="stock-keeping-unitsku opensans-normal-vulcan-16px">{stockKeepingUnitSku}</div>
              <div className="number-12 opensans-semi-bold-vulcan-16px">{number16}</div>
              <div className="number-12 opensans-semi-bold-vulcan-16px">{number17}</div>
              <div className="number-13 opensans-semi-bold-vulcan-16px">{number18}</div>
              <div className="number-13 opensans-semi-bold-vulcan-16px">{number19}</div>
              <div className="number-12 opensans-semi-bold-vulcan-16px">{number20}</div>
            </div>
          </div>
          <div className="flex-row-7">
            <div className="flex-col-12">
              <div className="stock-availability opensans-semi-bold-vulcan-20px">{stockAvailability}</div>
              <div className="item-name-1 opensans-normal-vulcan-16px">{itemName2}</div>
              <div className="group-76">
                <div className="number-11 opensans-normal-vulcan-16px">{number21}</div>
                <div className="milk-1 opensans-semi-bold-vulcan-16px">{milk2}</div>
              </div>
              <div className="group-78">
                <div className="number-11 opensans-normal-vulcan-16px">{number22}</div>
                <div className="napkins-1 opensans-semi-bold-vulcan-16px">{napkins2}</div>
              </div>
              <div className="group-80-1">
                <div className="number-11 opensans-normal-vulcan-16px">{number23}</div>
                <div className="arabica-beans-1 opensans-semi-bold-vulcan-16px">{arabicaBeans2}</div>
              </div>
              <div className="group-82">
                <div className="number-11 opensans-normal-vulcan-16px">{number24}</div>
                <div className="place-4 opensans-semi-bold-vulcan-16px">{place3}</div>
              </div>
              <div className="group-84-1">
                <div className="number-11 opensans-normal-vulcan-16px">{number25}</div>
                <div className="sweetener-1 opensans-semi-bold-vulcan-16px">{sweetener2}</div>
              </div>
            </div>
            <div className="flex-col-13">
              <div className="lead-timein-days opensans-normal-vulcan-16px">{leadTimeInDays}</div>
              <div className="number-13 opensans-semi-bold-vulcan-16px">{number26}</div>
              <div className="number-13 opensans-semi-bold-vulcan-16px">{number27}</div>
              <div className="number-13 opensans-semi-bold-vulcan-16px">{number28}</div>
              <div className="number-13 opensans-semi-bold-vulcan-16px">{number29}</div>
              <div className="number-13 opensans-semi-bold-vulcan-16px">{number30}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
