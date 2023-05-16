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
import "./HomePage3.css";

function HomePage3(props) {
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
      <div className="home-page2 screen">
        <Group752
          group92Props={group752Props.group92Props}
          group14Props={group752Props.group14Props}
          group20Props={group752Props.group20Props}
          group19Props={group752Props.group19Props}
        />
        <div className="flex-row-34">
          <div className="flex-col-37 opensans-semi-bold-vulcan-32px">
            <h1 className="title-9">{title}</h1>
            <div className="over-container-2">
              <div className="inventory-overview-4">{inventoryOverview1}</div>
              <div className="flex-col-38">
                <div className="flex-col-39">
                  <Frame93 />
                  <div className="frame-2-7">
                    <div className="name-8 opensans-semi-bold-cobalt-20px">{name}</div>
                    <div className="group-35-9"></div>
                  </div>
                  <div className="group-49-3">
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
                  <div className="total-sales-over-time-3 opensans-normal-vulcan-14px">{totalSalesOverTime}</div>
                </div>
                <div className="flex-row-35">
                  <div className="number-container-5 opensans-normal-vulcan-12px">
                    <div className="number-54">{number1}</div>
                    <div className="number-52">{number2}</div>
                    <div className="number-53">{number3}</div>
                    <div className="number-52">{number4}</div>
                    <div className="number-52">{number5}</div>
                    <div className="number-52">{number6}</div>
                    <div className="number-53">{number7}</div>
                  </div>
                  <div className="overlap-group1-11">
                    <img className="vector-6-3" src="/img/vector-6.svg" alt="Vector 6" />
                    <img className="line-1-3" src="/img/line-1.svg" alt="Line 1" />
                    <img className="line-3-3" src="/img/line-1.svg" alt="Line 3" />
                    <img className="line-4-3" src="/img/line-1.svg" alt="Line 4" />
                    <img className="line-5-3" src="/img/line-1.svg" alt="Line 5" />
                    <img className="line-6-3" src="/img/line-1.svg" alt="Line 6" />
                    <img className="line-7-3" src="/img/line-1.svg" alt="Line 7" />
                    <img className="line-8-3" src="/img/line-1.svg" alt="Line 8" />
                    <img className="line-9-3" src="/img/line-1.svg" alt="Line 9" />
                    <img className="line-2-3" src="/img/line-2.svg" alt="Line 2" />
                    <img className="line-11-3" src="/img/line-2.svg" alt="Line 11" />
                    <img className="line-12-3" src="/img/line-2.svg" alt="Line 12" />
                    <img className="line-13-3" src="/img/line-2.svg" alt="Line 13" />
                    <img className="line-14-3" src="/img/line-2.svg" alt="Line 14" />
                    <img className="line-15-3" src="/img/line-2.svg" alt="Line 15" />
                    <img className="line-16-3" src="/img/line-2.svg" alt="Line 16" />
                    <img className="vector-5-3" src="/img/vector-5.svg" alt="Vector 5" />
                    <div className="ellipse-13-3"></div>
                    <div className="ellipse-14-3"></div>
                    <div className="ellipse-19-12"></div>
                    <div className="ellipse-20-6"></div>
                    <div className="ellipse-21-5"></div>
                    <div className="ellipse-15-3"></div>
                    <div className="ellipse-16-3"></div>
                    <div className="ellipse-17-3"></div>
                    <div className="ellipse-18-4"></div>
                  </div>
                </div>
                <div className="flex-col-40">
                  <div className="flex-row-36 opensans-normal-vulcan-12px">
                    <div className="number-55">{number8}</div>
                    <div className="address-18">{address1}</div>
                    <div className="address-19">{address2}</div>
                    <div className="price-25">{price1}</div>
                    <div className="address-20">{address3}</div>
                    <div className="address-21">{address4}</div>
                  </div>
                  <div className="group-container-19">
                    <div className="group-44-3">
                      <div className="ellipse-19-13"></div>
                      <div className="today-5 opensans-normal-vulcan-14px">{today1}</div>
                    </div>
                    <div className="group-45-3">
                      <div className="ellipse-19-14"></div>
                      <div className="last-wednesday-3 opensans-normal-vulcan-14px">{lastWednesday}</div>
                    </div>
                  </div>
                  <div className="frame-1-2">
                    <div className="advance-analytics-4 opensans-semi-bold-athens-gray-16px">{advanceAnalytics}</div>
                    <img className="group-50-3" src={group50} alt="Group 50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="inventory-overview-5">{inventoryOverview2}</div>
          </div>
          <div className="group-60-2">
            <Frame2 className={frame2Props.className} />
            <div className="group-53-5 opensans-semi-bold-cobalt-16px">
              <div className="total-customers-container-2">
                <div className="total-customers-2">{totalCustomers1}</div>
                <div className="total-customers-2">{totalCustomers2}</div>
              </div>
              <div className="number-56">{number9}</div>
              <div className="group-52-10"></div>
            </div>
            <img className="line-49" src="/img/line-17.svg" alt="Line 17" />
            <Group5422 newCustomers={group54221Props.newCustomers} />
            <img className="line-49" src="/img/line-17.svg" alt="Line 18" />
            <Group5422 newCustomers={group54222Props.newCustomers} className={group54222Props.className} />
            <img className="line-49" src="/img/line-17.svg" alt="Line 19" />
            <Group5422 newCustomers={group54223Props.newCustomers} className={group54223Props.className} />
            <img className="line-49" src="/img/line-17.svg" alt="Line 20" />
            <Group5422 newCustomers={group54224Props.newCustomers} className={group54224Props.className} />
            <img className="line-49" src="/img/line-17.svg" alt="Line 21" />
            <Group5422 newCustomers={group54225Props.newCustomers} className={group54225Props.className} />
            <img className="line-49" src="/img/line-17.svg" alt="Line 22" />
            <Group5422 newCustomers={group54226Props.newCustomers} className={group54226Props.className} />
          </div>
          <div className="overlap-group2-7">
            <div className="today-6 opensans-semi-bold-vulcan-20px">{today2}</div>
            <div className="group-65-2">
              <div className="group-62-2">
                <div className="payment-types-2 opensans-semi-bold-cobalt-20px">{paymentTypes}</div>
                <div className="group-52-9"></div>
              </div>
              <div className="x-sales-2 opensans-normal-vulcan-18px">{noSalesYetToday}</div>
            </div>
            <div className="group-66-2">
              <div className="group-63-2">
                <div className="top-item-by-sales-2 opensans-semi-bold-cobalt-20px">{topItemBySales}</div>
                <div className="group-52-9"></div>
              </div>
              <div className="x-sales-2 opensans-normal-vulcan-18px">{noItemSalesToday1}</div>
            </div>
            <div className="group-67-2">
              <div className="group-64-2">
                <div className="top-categories-by-item-3 opensans-semi-bold-cobalt-20px">{topCategoriesByItem}</div>
                <div className="group-52-9"></div>
              </div>
              <div className="x-sales-2 opensans-normal-vulcan-18px">{noItemSalesToday2}</div>
            </div>
          </div>
        </div>
        <div className="rectangle-6-12"></div>
        <div className="rectangle-6-13"></div>
        <Group28 />
        <img className="vector-16" src="/img/vector-4.svg" alt="Vector" />
        <div className="group-31-7">
          <img className="group-3-6" src={group30} alt="Group 30" />
          <div className="inventory-management-7 opensans-semi-bold-cobalt-16px">{inventoryManagement}</div>
        </div>
        <div className="group-32-7">
          <img className="group-3-6" src={group33} alt="Group 33" />
          <div className="sales-management-7 opensans-semi-bold-cobalt-16px">{salesManagement}</div>
        </div>
        <Group38 />
        <Group51 group39={group51Props.group39} />
        <div className="group-container-20">
          <div className="group-73-1">
            <Group70 src={group701Props.src} />
            <div className="group-71-6">
              <div className="total-2 opensans-normal-vulcan-16px">{totalPurchase}</div>
              <div className="price-26 opensans-semi-bold-vulcan-32px">{price2}</div>
            </div>
          </div>
          <div className="group-74-1">
            <Group70 src={group702Props.src} />
            <div className="group-71-7">
              <div className="total-2 opensans-normal-vulcan-16px">{totalPurchaseDue}</div>
              <div className="price-27 opensans-semi-bold-vulcan-32px">{price3}</div>
            </div>
          </div>
          <div className="group-88-1">
            <Group70 src={group703Props.src} />
            <div className="group-71-8">
              <div className="total-2 opensans-normal-vulcan-16px">{totalSuppliers}</div>
              <div className="number-57 opensans-semi-bold-vulcan-32px">{number10}</div>
            </div>
          </div>
        </div>
        <Group155 />
      </div>
    </div>
  );
}

export default HomePage3;
