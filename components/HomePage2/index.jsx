import React from "react";
import Group752 from "../Group752";
import Frame93 from "../Frame93";
import Group42 from "../Group42";
import Group46 from "../Group46";
import Group47 from "../Group47";
import Frame2 from "../Frame2";
import Group5422 from "../Group5422";
import Group28 from "../Group28";
import Group38 from "../Group38";
import Group51 from "../Group51";
import Group70 from "../Group70";
import Group155 from "../Group155";
import "./HomePage2.css";

function HomePage2(props) {
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
    advanceAnalytics,
    group50,
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
    group30,
    inventoryManagement,
    group33,
    salesManagement,
    totalPurchase,
    price2,
    totalPurchaseDue,
    price3,
    totalSuppliers,
    number10,
    group752Props,
    group46Props,
    group471Props,
    group472Props,
    frame2Props,
    group54221Props,
    group54222Props,
    group54223Props,
    group54224Props,
    group54225Props,
    group54226Props,
    group51Props,
    group701Props,
    group702Props,
    group703Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-page-2 screen">
        <Group752
          group92Props={group752Props.group92Props}
          group14Props={group752Props.group14Props}
          group20Props={group752Props.group20Props}
          group19Props={group752Props.group19Props}
        />
        <div className="flex-row-27">
          <div className="flex-col-25 opensans-semi-bold-vulcan-32px">
            <h1 className="title-8">{title}</h1>
            <div className="over-container-1">
              <div className="inventory-overview-2">{inventoryOverview1}</div>
              <div className="flex-col-26">
                <div className="flex-col-27">
                  <Frame93 />
                  <div className="frame-2-6">
                    <div className="name-7 opensans-semi-bold-cobalt-20px">{name}</div>
                    <div className="group-35-8"></div>
                  </div>
                  <div className="group-49-2">
                    <Group42 />
                    <Group46 className={group46Props.className} />
                    <Group47
                      averageSale={group471Props.averageSale}
                      price={group471Props.price}
                      className={group471Props.className}
                    />
                    <Group47
                      averageSale={group472Props.averageSale}
                      price={group472Props.price}
                      className={group472Props.className}
                    />
                  </div>
                  <div className="total-sales-over-time-2 opensans-normal-vulcan-14px">{totalSalesOverTime}</div>
                </div>
                <div className="flex-row-28">
                  <div className="number-container-4 opensans-normal-vulcan-12px">
                    <div className="number-40">{number1}</div>
                    <div className="number-38">{number2}</div>
                    <div className="number-39">{number3}</div>
                    <div className="number-38">{number4}</div>
                    <div className="number-38">{number5}</div>
                    <div className="number-38">{number6}</div>
                    <div className="number-39">{number7}</div>
                  </div>
                  <div className="overlap-group1-10">
                    <img className="vector-6-2" src="/img/vector-6.svg" alt="Vector 6" />
                    <img className="line-1-2" src="/img/line-1.svg" alt="Line 1" />
                    <img className="line-3-2" src="/img/line-1.svg" alt="Line 3" />
                    <img className="line-4-2" src="/img/line-1.svg" alt="Line 4" />
                    <img className="line-5-2" src="/img/line-1.svg" alt="Line 5" />
                    <img className="line-6-2" src="/img/line-1.svg" alt="Line 6" />
                    <img className="line-7-2" src="/img/line-1.svg" alt="Line 7" />
                    <img className="line-8-2" src="/img/line-1.svg" alt="Line 8" />
                    <img className="line-9-2" src="/img/line-1.svg" alt="Line 9" />
                    <img className="line-2-2" src="/img/line-2.svg" alt="Line 2" />
                    <img className="line-11-2" src="/img/line-2.svg" alt="Line 11" />
                    <img className="line-12-2" src="/img/line-2.svg" alt="Line 12" />
                    <img className="line-13-2" src="/img/line-2.svg" alt="Line 13" />
                    <img className="line-14-2" src="/img/line-2.svg" alt="Line 14" />
                    <img className="line-15-2" src="/img/line-2.svg" alt="Line 15" />
                    <img className="line-16-2" src="/img/line-2.svg" alt="Line 16" />
                    <img className="vector-5-2" src="/img/vector-5.svg" alt="Vector 5" />
                    <div className="ellipse-13-2"></div>
                    <div className="ellipse-14-2"></div>
                    <div className="ellipse-19-9"></div>
                    <div className="ellipse-20-5"></div>
                    <div className="ellipse-21-4"></div>
                    <div className="ellipse-15-2"></div>
                    <div className="ellipse-16-2"></div>
                    <div className="ellipse-17-2"></div>
                    <div className="ellipse-18-3"></div>
                  </div>
                </div>
                <div className="flex-col-28">
                  <div className="flex-row-29 opensans-normal-vulcan-12px">
                    <div className="number-41">{number8}</div>
                    <div className="address-14">{address1}</div>
                    <div className="address-15">{address2}</div>
                    <div className="price-22">{price1}</div>
                    <div className="address-16">{address3}</div>
                    <div className="address-17">{address4}</div>
                  </div>
                  <div className="group-container-17">
                    <div className="group-44-2">
                      <div className="ellipse-19-10"></div>
                      <div className="today-3 opensans-normal-vulcan-14px">{today1}</div>
                    </div>
                    <div className="group-45-2">
                      <div className="ellipse-19-11"></div>
                      <div className="last-wednesday-2 opensans-normal-vulcan-14px">{lastWednesday}</div>
                    </div>
                  </div>
                  <div className="frame-1-1">
                    <div className="advance-analytics-3 opensans-semi-bold-athens-gray-16px">{advanceAnalytics}</div>
                    <img className="group-50-2" src={group50} alt="Group 50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="inventory-overview-3">{inventoryOverview2}</div>
          </div>
          <div className="group-60-1">
            <Frame2 className={frame2Props.className} />
            <div className="group-53-4 opensans-semi-bold-cobalt-16px">
              <div className="total-customers-container-1">
                <div className="total-customers-1">{totalCustomers1}</div>
                <div className="total-customers-1">{totalCustomers2}</div>
              </div>
              <div className="number-42">{number9}</div>
              <div className="group-52-6"></div>
            </div>
            <img className="line-48" src="/img/line-17.svg" alt="Line 17" />
            <Group5422 newCustomers={group54221Props.newCustomers} />
            <img className="line-48" src="/img/line-17.svg" alt="Line 18" />
            <Group5422 newCustomers={group54222Props.newCustomers} className={group54222Props.className} />
            <img className="line-48" src="/img/line-17.svg" alt="Line 19" />
            <Group5422 newCustomers={group54223Props.newCustomers} className={group54223Props.className} />
            <img className="line-48" src="/img/line-17.svg" alt="Line 20" />
            <Group5422 newCustomers={group54224Props.newCustomers} className={group54224Props.className} />
            <img className="line-48" src="/img/line-17.svg" alt="Line 21" />
            <Group5422 newCustomers={group54225Props.newCustomers} className={group54225Props.className} />
            <img className="line-48" src="/img/line-17.svg" alt="Line 22" />
            <Group5422 newCustomers={group54226Props.newCustomers} className={group54226Props.className} />
          </div>
          <div className="overlap-group2-6">
            <div className="today-4 opensans-semi-bold-vulcan-20px">{today2}</div>
            <div className="group-65-1">
              <div className="group-62-1">
                <div className="payment-types-1 opensans-semi-bold-cobalt-20px">{paymentTypes}</div>
                <div className="group-52-5"></div>
              </div>
              <div className="x-sales-1 opensans-normal-vulcan-18px">{noSalesYetToday}</div>
            </div>
            <div className="group-66-1">
              <div className="group-63-1">
                <div className="top-item-by-sales-1 opensans-semi-bold-cobalt-20px">{topItemBySales}</div>
                <div className="group-52-5"></div>
              </div>
              <div className="x-sales-1 opensans-normal-vulcan-18px">{noItemSalesToday1}</div>
            </div>
            <div className="group-67-1">
              <div className="group-64-1">
                <div className="top-categories-by-item-2 opensans-semi-bold-cobalt-20px">{topCategoriesByItem}</div>
                <div className="group-52-5"></div>
              </div>
              <div className="x-sales-1 opensans-normal-vulcan-18px">{noItemSalesToday2}</div>
            </div>
          </div>
        </div>
        <div className="rectangle-6-10"></div>
        <div className="rectangle-6-11"></div>
        <Group28 />
        <img className="vector-15" src="" alt="Vector" />
        <div className="group-31-6">
          <img className="group-3-5" src={group30} alt="Group 30" />
          <div className="inventory-management-6 opensans-semi-bold-cobalt-16px">{inventoryManagement}</div>
        </div>
        <div className="group-32-6">
          <img className="group-3-5" src={group33} alt="Group 33" />
          <div className="sales-management-6 opensans-semi-bold-cobalt-16px">{salesManagement}</div>
        </div>
        <Group38 />
        <Group51 group39={group51Props.group39} />
        <div className="group-container-18">
          <div className="group-73">
            <Group70 src={group701Props.src} />
            <div className="group-71-3">
              <div className="total-1 opensans-normal-vulcan-16px">{totalPurchase}</div>
              <div className="price-23 opensans-semi-bold-vulcan-32px">{price2}</div>
            </div>
          </div>
          <div className="group-74">
            <Group70 src={group702Props.src} />
            <div className="group-71-4">
              <div className="total-1 opensans-normal-vulcan-16px">{totalPurchaseDue}</div>
              <div className="price-24 opensans-semi-bold-vulcan-32px">{price3}</div>
            </div>
          </div>
          <div className="group-88">
            <Group70 src={group703Props.src} />
            <div className="group-71-5">
              <div className="total-1 opensans-normal-vulcan-16px">{totalSuppliers}</div>
              <div className="number-43 opensans-semi-bold-vulcan-32px">{number10}</div>
            </div>
          </div>
        </div>
        <Group155 />
      </div>
    </div>
  );
}

export default HomePage2;
