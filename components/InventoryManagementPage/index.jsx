import React from "react";
import { Link } from "react-router-dom";
import Group14 from "../Group14";
import Group20 from "../Group20";
import Group19 from "../Group19";
import Group18 from "../Group18";
import Group31 from "../Group31";
import Frame93 from "../Frame93";
import Group118 from "../Group118";
import "./InventoryManagementPage.css";

function InventoryManagementPage(props) {
  const {
    group90,
    optimizeAi,
    inventoryData,
    currentStockLevels,
    itemName1,
    number1,
    milk1,
    number2,
    napkins1,
    number3,
    arabicaBeans1,
    number4,
    place1,
    number5,
    sweetener1,
    stockKeepingUnitSku,
    number6,
    number7,
    number8,
    number9,
    number10,
    stockAvailability,
    itemName2,
    leadTimeInDays,
    number11,
    milk2,
    number12,
    number13,
    napkins2,
    number14,
    number15,
    arabicaBeans2,
    number16,
    number17,
    place2,
    number18,
    number19,
    sweetener2,
    number20,
    stockLevels,
    storeNameLocation,
    number21,
    spanText1,
    spanText2,
    number22,
    spanText3,
    spanText4,
    number23,
    spanText5,
    spanText6,
    place3,
    medium1,
    low,
    stockLevel1,
    percent1,
    percent2,
    percent3,
    number24,
    spanText7,
    spanText8,
    percent4,
    number25,
    spanText9,
    spanText10,
    percent5,
    iconHome,
    place4,
    group33,
    salesManagement,
    group39,
    fraudAndSecurityDetection,
    addInventory,
    group971,
    group972,
    addNewItem,
    lowStockLevel,
    expiringSoon,
    itemName3,
    referenceNumber,
    orderedQuantity,
    stockLevel2,
    reorderPoints,
    lastOrderDates,
    remainingShelfLife,
    carryingCost,
    stockoutCost,
    action1,
    milk3,
    rid_01,
    number26,
    address1,
    address2,
    date1,
    address3,
    number27,
    number28,
    group1241,
    group1141,
    arabicaBeans3,
    rid_02,
    x50Kg,
    x40Kg1,
    x05Kg,
    date2,
    address4,
    number29,
    number30,
    group1242,
    group1142,
    napkins3,
    rid_03,
    number31,
    address5,
    address6,
    date3,
    address7,
    number32,
    number33,
    group1243,
    group1143,
    place5,
    rid_04,
    number34,
    x40Kg2,
    number35,
    date4,
    address8,
    number36,
    number37,
    group1244,
    group1144,
    cutlery,
    rid_05,
    number38,
    address9,
    address10,
    date5,
    address11,
    number39,
    number40,
    group1245,
    group1145,
    syrups,
    rid_06,
    number41,
    x40Kg3,
    number42,
    date6,
    address12,
    number43,
    number44,
    group1246,
    group1146,
    seeAllItemList,
    group121,
    searchItemNameOrLocation,
    group1171,
    spanText11,
    spanText12,
    advanceAnalytics,
    group50,
    title,
    group122,
    searchProductByPr,
    group1172,
    addProduct,
    group973,
    spanText13,
    spanText14,
    theArabicaIsAHig,
    category,
    dairyProduct,
    cost,
    price1,
    subCategory,
    liquidMilk,
    margin,
    percent6,
    productSize,
    medium2,
    price2,
    price3,
    shelfLife,
    address13,
    group113,
    group1147,
    seeAllProductsList1,
    supplierData,
    group123,
    searchBySupplierNameOrReference,
    group1173,
    addNewPurchase,
    group974,
    supplierName,
    place6,
    place7,
    status,
    grandTotal,
    paid1,
    due,
    paymentStatus,
    action2,
    performanceMetrices,
    syscoCorporation,
    phone1,
    address14,
    received1,
    number45,
    number46,
    number47,
    paid2,
    group1247,
    group1148,
    percent7,
    usFoods,
    phone2,
    address15,
    pending,
    number48,
    number49,
    number50,
    paid3,
    group1248,
    group1149,
    percent8,
    keheDistributors,
    phone3,
    address16,
    received2,
    number51,
    number52,
    number53,
    paid4,
    group1249,
    group11410,
    percent9,
    name,
    phone4,
    address17,
    received3,
    number54,
    number55,
    number56,
    paid5,
    group12410,
    group11411,
    percent10,
    surname,
    phone5,
    address18,
    received4,
    number57,
    number58,
    number59,
    paid6,
    group12411,
    group11412,
    percent11,
    distantLandsCoffee,
    phone6,
    address19,
    received5,
    number60,
    number61,
    number62,
    paid7,
    group12412,
    group11413,
    percent12,
    merconCoffeeGroup,
    phone7,
    address20,
    received6,
    number63,
    number64,
    number65,
    paid8,
    group12413,
    group11414,
    percent13,
    europeanCoffeeTrip,
    phone8,
    address21,
    received7,
    number66,
    number67,
    number68,
    paid9,
    group12414,
    group11415,
    percent14,
    gaviaGourmet,
    phone9,
    address22,
    received8,
    number69,
    number70,
    number71,
    paid10,
    group12415,
    group11416,
    percent15,
    seeAllProductsList2,
    group135,
    group31Props,
    group1181Props,
    group1182Props,
    group1183Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inventory-management-page screen">
        <div className="group-75-5">
          <Link to="/home-page">
            <div className="group-92-7">
              <img className="group-90-9" src={group90} alt="Group 90" />
              <div className="optimize-ai-9 opensans-semi-bold-vulcan-14-6px">{optimizeAi}</div>
            </div>
          </Link>
          <Group14 />
          <Group20 />
          <Group19 />
          <Group18 />
        </div>
        <div className="flex-row-10">
          <div className="flex-col-16">
            <div className="inventory-data opensans-semi-bold-vulcan-32px">{inventoryData}</div>
            <div className="group-155-1">
              <div className="flex-row-11">
                <div className="flex-col-17">
                  <div className="stock opensans-semi-bold-vulcan-20px">{currentStockLevels}</div>
                  <div className="item-name-2 opensans-normal-vulcan-16px">{itemName1}</div>
                  <div className="group-76-1">
                    <div className="number-27 opensans-normal-vulcan-16px">{number1}</div>
                    <div className="milk-4 opensans-semi-bold-vulcan-16px">{milk1}</div>
                  </div>
                  <div className="group-78-1">
                    <div className="number-27 opensans-normal-vulcan-16px">{number2}</div>
                    <div className="napkins-2 opensans-semi-bold-vulcan-16px">{napkins1}</div>
                  </div>
                  <div className="group-80-2">
                    <div className="number-27 opensans-normal-vulcan-16px">{number3}</div>
                    <div className="arabica-beans-2 opensans-semi-bold-vulcan-16px">{arabicaBeans1}</div>
                  </div>
                  <div className="group-82-1">
                    <div className="number-27 opensans-normal-vulcan-16px">{number4}</div>
                    <div className="place-9 opensans-semi-bold-vulcan-16px">{place1}</div>
                  </div>
                  <div className="group-84-2">
                    <div className="number-27 opensans-normal-vulcan-16px">{number5}</div>
                    <div className="sweetener-3 opensans-semi-bold-vulcan-16px">{sweetener1}</div>
                  </div>
                </div>
                <div className="flex-col-18">
                  <div className="stock-keeping-unitsku-1 opensans-normal-vulcan-16px">{stockKeepingUnitSku}</div>
                  <div className="number-28 opensans-semi-bold-vulcan-16px">{number6}</div>
                  <div className="number-28 opensans-semi-bold-vulcan-16px">{number7}</div>
                  <div className="number-29 opensans-semi-bold-vulcan-16px">{number8}</div>
                  <div className="number-29 opensans-semi-bold-vulcan-16px">{number9}</div>
                  <div className="number-28 opensans-semi-bold-vulcan-16px">{number10}</div>
                </div>
              </div>
              <div className="overlap-group1-7">
                <div className="stock opensans-semi-bold-vulcan-20px">{stockAvailability}</div>
                <div className="flex-row-12 opensans-normal-vulcan-16px">
                  <div className="item-name-3">{itemName2}</div>
                  <div className="lead-timein-days-1">{leadTimeInDays}</div>
                </div>
                <div className="flex-row-13">
                  <div className="group-76-2">
                    <div className="number-27 opensans-normal-vulcan-16px">{number11}</div>
                    <div className="milk-5 opensans-semi-bold-vulcan-16px">{milk2}</div>
                  </div>
                  <div className="number-29 opensans-semi-bold-vulcan-16px">{number12}</div>
                </div>
                <div className="flex-row-14">
                  <div className="group-78-2">
                    <div className="number-27 opensans-normal-vulcan-16px">{number13}</div>
                    <div className="napkins-3 opensans-semi-bold-vulcan-16px">{napkins2}</div>
                  </div>
                  <div className="number-29 opensans-semi-bold-vulcan-16px">{number14}</div>
                </div>
                <div className="flex-row-15">
                  <div className="group-80-3">
                    <div className="number-27 opensans-normal-vulcan-16px">{number15}</div>
                    <div className="arabica-beans-3 opensans-semi-bold-vulcan-16px">{arabicaBeans2}</div>
                  </div>
                  <div className="number-29 opensans-semi-bold-vulcan-16px">{number16}</div>
                </div>
                <div className="flex-row-16">
                  <div className="group-82-2">
                    <div className="number-27 opensans-normal-vulcan-16px">{number17}</div>
                    <div className="place-10 opensans-semi-bold-vulcan-16px">{place2}</div>
                  </div>
                  <div className="number-29 opensans-semi-bold-vulcan-16px">{number18}</div>
                </div>
                <div className="flex-row-17">
                  <div className="group-84-3">
                    <div className="number-27 opensans-normal-vulcan-16px">{number19}</div>
                    <div className="sweetener-4 opensans-semi-bold-vulcan-16px">{sweetener2}</div>
                  </div>
                  <div className="number-29 opensans-semi-bold-vulcan-16px">{number20}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col-19">
            <div className="flex-row-18">
              <div className="flex-col-20">
                <div className="stock-levels opensans-semi-bold-vulcan-20px">{stockLevels}</div>
                <div className="store-name-location opensans-normal-vulcan-16px">{storeNameLocation}</div>
                <div className="group-76-3">
                  <div className="number-27 opensans-normal-vulcan-16px">{number21}</div>
                  <div className="starbucks-la opensans-semi-bold-vulcan-16px">
                    <span className="opensans-semi-bold-vulcan-16px">{spanText1}</span>
                    <span className="span1-3 opensans-normal-vulcan-15px">{spanText2}</span>
                  </div>
                </div>
                <div className="group-78-3">
                  <div className="number-27 opensans-normal-vulcan-16px">{number22}</div>
                  <div className="starbucks-nyc opensans-semi-bold-vulcan-16px">
                    <span className="opensans-semi-bold-vulcan-16px">{spanText3}</span>
                    <span className="span1-3 opensans-normal-vulcan-15px">{spanText4}</span>
                  </div>
                </div>
                <div className="group-80-4">
                  <div className="number-27 opensans-normal-vulcan-16px">{number23}</div>
                  <div className="starbucks-soho opensans-semi-bold-vulcan-16px">
                    <span className="opensans-semi-bold-vulcan-16px">{spanText5}</span>
                    <span className="span1-3 opensans-normal-vulcan-15px">{spanText6}</span>
                  </div>
                </div>
              </div>
              <div className="flex-col-21">
                <div className="group-96">
                  <div className="group-93">
                    <div className="ellipse-21-3"></div>
                    <div className="place-11 opensans-semi-bold-vulcan-12px">{place3}</div>
                  </div>
                  <div className="group-94">
                    <div className="ellipse-20-3"></div>
                    <div className="medium opensans-semi-bold-vulcan-12px">{medium1}</div>
                  </div>
                  <div className="group-95">
                    <div className="ellipse-19-7"></div>
                    <div className="low opensans-semi-bold-vulcan-12px">{low}</div>
                  </div>
                </div>
                <div className="stock-level opensans-normal-vulcan-16px">{stockLevel1}</div>
                <div className="percent opensans-semi-bold-slimy-green-16px">{percent1}</div>
                <div className="percent opensans-semi-bold-slimy-green-16px">{percent2}</div>
                <div className="percent opensans-semi-bold-monza-16px">{percent3}</div>
              </div>
            </div>
            <div className="flex-row-19">
              <div className="group-82-3">
                <div className="number-27 opensans-normal-vulcan-16px">{number24}</div>
                <div className="starbucks-tribeca opensans-semi-bold-vulcan-16px">
                  <span className="opensans-semi-bold-vulcan-16px">{spanText7}</span>
                  <span className="span1-3 opensans-normal-vulcan-15px">{spanText8}</span>
                </div>
              </div>
              <div className="percent-2">{percent4}</div>
            </div>
            <div className="flex-row-20">
              <div className="group-84-4">
                <div className="number-27 opensans-normal-vulcan-16px">{number25}</div>
                <div className="starbucks-nj opensans-semi-bold-vulcan-16px">
                  <span className="opensans-semi-bold-vulcan-16px">{spanText9}</span>
                  <span className="span1-3 opensans-normal-vulcan-15px">{spanText10}</span>
                </div>
              </div>
              <div className="percent-3 opensans-semi-bold-monza-16px">{percent5}</div>
            </div>
          </div>
        </div>
        <Link to="/home-page">
          <div className="group-28-5">
            <img className="icon-home-5" src={iconHome} alt="icon-home" />
            <div className="place-12 opensans-semi-bold-cobalt-16px">{place4}</div>
          </div>
        </Link>
        <div className="rectangle-6-8"></div>
        <div className="rectangle-6-9"></div>
        <Group31 className={group31Props.className} />
        <img className="vector-14" src="/img/vector.svg" alt="Vector" />
        <Link to="/sales-management-page">
          <div className="group-32-5">
            <img className="group-33-1" src={group33} alt="Group 33" />
            <div className="sales-management-5 opensans-semi-bold-cobalt-16px">{salesManagement}</div>
          </div>
        </Link>
        <Link to="/fraud-and-security-detection-page">
          <div className="group-51-5">
            <img className="group-39-5" src={group39} alt="Group 39" />
            <div className="fraud-and-security-detection-5 opensans-semi-bold-cobalt-15px">
              {fraudAndSecurityDetection}
            </div>
          </div>
        </Link>
        <div className="overlap-group13">
          <div className="overlap-group12">
            <div className="flex-row-21">
              <Frame93 />
              <div className="flex-col-22">
                <div className="frame-99-1">
                  <div className="group-98">
                    <div className="add opensans-semi-bold-athens-gray-20px">{addInventory}</div>
                    <img className="group-97" src={group971} alt="Group 97" />
                  </div>
                </div>
                <div className="group-139">
                  <img className="group-97-1" src={group972} alt="Group 97" />
                  <div className="add-new-item opensans-semi-bold-cobalt-16px">{addNewItem}</div>
                </div>
                <div className="group-container-7">
                  <div className="group-140">
                    <div className="ellipse-19-8"></div>
                    <div className="low-stock-level opensans-normal-vulcan-18px">{lowStockLevel}</div>
                  </div>
                  <div className="group-141">
                    <div className="ellipse-20-4"></div>
                    <div className="expiring-soon opensans-normal-vulcan-18px">{expiringSoon}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row-22 opensans-normal-vulcan-15px">
              <div className="item-name-4">{itemName3}</div>
              <div className="reference-number">{referenceNumber}</div>
              <div className="ordered-quantity-1">{orderedQuantity}</div>
              <div className="stock-level-1">{stockLevel2}</div>
              <div className="reorder-points">{reorderPoints}</div>
              <div className="last-order-dates">{lastOrderDates}</div>
              <div className="remaining-shelf-life">{remainingShelfLife}</div>
              <div className="carrying-cost">{carryingCost}</div>
              <div className="stockout-cost">{stockoutCost}</div>
              <div className="action">{action1}</div>
            </div>
            <div className="overlap-group-9">
              <div className="milk-6 opensans-normal-vulcan-16px">{milk3}</div>
              <div className="rid_01 opensans-normal-vulcan-16px">{rid_01}</div>
              <div className="number-30 opensans-normal-vulcan-16px">{number26}</div>
              <div className="address-8 opensans-semi-bold-valencia-16px">{address1}</div>
              <div className="address-9 opensans-normal-vulcan-16px">{address2}</div>
              <div className="date opensans-normal-vulcan-16px">{date1}</div>
              <div className="address-10 opensans-normal-vulcan-16px">{address3}</div>
              <div className="number-31 opensans-normal-vulcan-16px">{number27}</div>
              <div className="number-32 opensans-normal-vulcan-16px">{number28}</div>
              <img className="group-124" src={group1241} alt="Group 124" />
              <img className="group-114" src={group1141} alt="Group 114" />
            </div>
            <div className="overlap-group-4">
              <div className="arabica-beans-4 opensans-normal-vulcan-16px">{arabicaBeans3}</div>
              <div className="rid_02 opensans-normal-vulcan-16px">{rid_02}</div>
              <div className="x50kg opensans-normal-vulcan-16px">{x50Kg}</div>
              <div className="x40kg-1 opensans-semi-bold-vulcan-16px">{x40Kg1}</div>
              <div className="x05kg opensans-normal-vulcan-16px">{x05Kg}</div>
              <div className="date-2 opensans-normal-vulcan-16px">{date2}</div>
              <div className="address-10 opensans-normal-vulcan-16px">{address4}</div>
              <div className="number-31 opensans-normal-vulcan-16px">{number29}</div>
              <div className="number-32 opensans-normal-vulcan-16px">{number30}</div>
              <img className="group-124" src={group1242} alt="Group 124" />
              <img className="group-114" src={group1142} alt="Group 114" />
            </div>
            <div className="overlap-group-5">
              <div className="napkins-4 opensans-normal-vulcan-16px">{napkins3}</div>
              <div className="rid_03 opensans-normal-vulcan-16px">{rid_03}</div>
              <div className="number-30 opensans-normal-vulcan-16px">{number31}</div>
              <div className="address-8 opensans-semi-bold-valencia-16px">{address5}</div>
              <div className="address-9 opensans-normal-vulcan-16px">{address6}</div>
              <div className="date opensans-normal-vulcan-16px">{date3}</div>
              <div className="address-10 opensans-normal-vulcan-16px">{address7}</div>
              <div className="number-31 opensans-normal-vulcan-16px">{number32}</div>
              <div className="number-32 opensans-normal-vulcan-16px">{number33}</div>
              <img className="group-124" src={group1243} alt="Group 124" />
              <img className="group-114" src={group1143} alt="Group 114" />
            </div>
            <div className="overlap-group-4">
              <div className="place-13 opensans-normal-vulcan-16px">{place5}</div>
              <div className="rid_04 opensans-normal-vulcan-16px">{rid_04}</div>
              <div className="number-33 opensans-normal-vulcan-16px">{number34}</div>
              <div className="x40kg opensans-semi-bold-vulcan-16px">{x40Kg2}</div>
              <div className="number-34 opensans-normal-vulcan-16px">{number35}</div>
              <div className="date-1 opensans-normal-vulcan-16px">{date4}</div>
              <div className="address-10 opensans-normal-vulcan-16px">{address8}</div>
              <div className="number-31 opensans-normal-vulcan-16px">{number36}</div>
              <div className="number-32 opensans-normal-vulcan-16px">{number37}</div>
              <img className="group-124" src={group1244} alt="Group 124" />
              <img className="group-114" src={group1144} alt="Group 114" />
            </div>
            <div className="overlap-group-5">
              <div className="cutlery opensans-normal-vulcan-16px">{cutlery}</div>
              <div className="rid_05 opensans-normal-vulcan-16px">{rid_05}</div>
              <div className="number-30 opensans-normal-vulcan-16px">{number38}</div>
              <div className="address-8 opensans-semi-bold-valencia-16px">{address9}</div>
              <div className="address-9 opensans-normal-vulcan-16px">{address10}</div>
              <div className="date opensans-normal-vulcan-16px">{date5}</div>
              <div className="address-10 opensans-normal-vulcan-16px">{address11}</div>
              <div className="number-31 opensans-normal-vulcan-16px">{number39}</div>
              <div className="number-32 opensans-normal-vulcan-16px">{number40}</div>
              <img className="group-124" src={group1245} alt="Group 124" />
              <img className="group-114" src={group1145} alt="Group 114" />
            </div>
            <div className="overlap-group-4">
              <div className="syrups opensans-normal-vulcan-16px">{syrups}</div>
              <div className="rid_06 opensans-normal-vulcan-16px">{rid_06}</div>
              <div className="number-33 opensans-normal-vulcan-16px">{number41}</div>
              <div className="x40kg opensans-semi-bold-vulcan-16px">{x40Kg3}</div>
              <div className="number-34 opensans-normal-vulcan-16px">{number42}</div>
              <div className="date-1 opensans-normal-vulcan-16px">{date6}</div>
              <div className="address-10 opensans-normal-vulcan-16px">{address12}</div>
              <div className="number-31 opensans-normal-vulcan-16px">{number43}</div>
              <div className="number-32 opensans-normal-vulcan-16px">{number44}</div>
              <img className="group-124" src={group1246} alt="Group 124" />
              <img className="group-114" src={group1146} alt="Group 114" />
            </div>
            <div className="see-all-item-list opensans-normal-cobalt-20px">{seeAllItemList}</div>
          </div>
          <div className="frame-94-2">
            <div className="group-13-7">
              <img className="group-12-8" src={group121} alt="Group 12" />
              <p className="search opensans-normal-vulcan-16px">{searchItemNameOrLocation}</p>
            </div>
            <img className="group-2" src={group1171} alt="Group 117" />
          </div>
          <div className="turnover-rates-67">
            <span className="span0-1">{spanText11}</span>
            <span className="span1-4">{spanText12}</span>
          </div>
          <Link to="/inventory-advance-analytics-page">
            <div className="frame-1">
              <div className="advance-analytics-2 opensans-semi-bold-athens-gray-16px">{advanceAnalytics}</div>
              <img className="group-2" src={group50} alt="Group 50" />
            </div>
          </Link>
        </div>
        <h1 className="title-7 opensans-semi-bold-vulcan-32px">{title}</h1>
        <div className="group-121">
          <div className="flex-row-23">
            <div className="flex-col-23">
              <div className="frame-93-3">
                <div className="group-13-8">
                  <img className="group-12-8" src={group122} alt="Group 12" />
                  <p className="search opensans-normal-vulcan-16px">{searchProductByPr}</p>
                </div>
                <img className="group-2" src={group1172} alt="Group 117" />
              </div>
              <Group118 address={group1181Props.address} />
              <Group118 address={group1182Props.address} className={group1182Props.className} />
            </div>
            <div className="flex-col-24">
              <div className="frame-99">
                <div className="group-98-1">
                  <div className="add opensans-semi-bold-athens-gray-20px">{addProduct}</div>
                  <img className="group-97" src={group973} alt="Group 97" />
                </div>
              </div>
              <div className="group-117 opensans-normal-vulcan-16px">
                <div className="flex-row-24">
                  <img className="ellipse-24-1" src="/img/ellipse-24.svg" alt="Ellipse 24" />
                  <div className="group-100">
                    <div className="cow-milk-r_02 opensans-semi-bold-vulcan-18px">
                      <span className="opensans-semi-bold-vulcan-18px">{spanText13}</span>
                      <span className="opensans-normal-vulcan-18px">{spanText14}</span>
                    </div>
                    <p className="the-arabica-is-a-hig opensans-normal-vulcan-15px">{theArabicaIsAHig}</p>
                  </div>
                </div>
                <div className="group-container-8">
                  <div className="group-109">
                    <div className="category">{category}</div>
                    <div className="dairy-product">{dairyProduct}</div>
                  </div>
                  <div className="group-106-2">
                    <div className="cost">{cost}</div>
                    <div className="price-16">{price1}</div>
                  </div>
                </div>
                <div className="group-container-9">
                  <div className="group-110">
                    <div className="sub-category">{subCategory}</div>
                    <div className="liquid-milk">{liquidMilk}</div>
                  </div>
                  <div className="group-107">
                    <div className="margin">{margin}</div>
                    <div className="percent-4">{percent6}</div>
                  </div>
                </div>
                <div className="group-container-10">
                  <div className="group-111 opensans-normal-vulcan-16px">
                    <div className="product-size">{productSize}</div>
                    <div className="medium-1">{medium2}</div>
                  </div>
                  <div className="group-108">
                    <div className="price-17 opensans-normal-vulcan-16px">{price2}</div>
                    <div className="price-18 opensans-semi-bold-vulcan-16px">{price3}</div>
                  </div>
                </div>
                <div className="group-105">
                  <div className="shelf-life opensans-normal-vulcan-16px">{shelfLife}</div>
                  <div className="address-12 opensans-semi-bold-vulcan-16px">{address13}</div>
                </div>
                <div className="group-container-11">
                  <img className="group-11" src={group113} alt="Group 113" />
                  <img className="group-11" src={group1147} alt="Group 114" />
                </div>
              </div>
              <Group118 address={group1183Props.address} className={group1183Props.className} />
              <div className="see-all-products-list opensans-normal-cobalt-20px">{seeAllProductsList1}</div>
            </div>
          </div>
        </div>
        <div className="supplier-data opensans-semi-bold-vulcan-32px">{supplierData}</div>
        <div className="group-container-12">
          <div className="overlap-group11">
            <div className="frame-container">
              <div className="frame-93-3">
                <div className="group-13-9">
                  <img className="group-12-8" src={group123} alt="Group 12" />
                  <p className="search opensans-normal-vulcan-16px">{searchBySupplierNameOrReference}</p>
                </div>
                <img className="group-2" src={group1173} alt="Group 117" />
              </div>
              <div className="frame-99">
                <div className="group-98-2">
                  <div className="add opensans-semi-bold-athens-gray-20px">{addNewPurchase}</div>
                  <img className="group-97" src={group974} alt="Group 97" />
                </div>
              </div>
            </div>
            <div className="flex-row-25 opensans-normal-vulcan-15px">
              <div className="supplier-name">{supplierName}</div>
              <div className="place-14">{place6}</div>
              <div className="place-15">{place7}</div>
              <div className="status">{status}</div>
              <div className="grand-total">{grandTotal}</div>
              <div className="paid-1">{paid1}</div>
              <div className="due">{due}</div>
              <div className="payment-status">{paymentStatus}</div>
              <div className="action-1">{action2}</div>
              <div className="performance-metrices">{performanceMetrices}</div>
            </div>
            <div className="overlap-group2-5 opensans-normal-vulcan-16px">
              <div className="sysco-corporation">{syscoCorporation}</div>
              <div className="phone">{phone1}</div>
              <div className="address-11">{address14}</div>
              <div className="overlap-group-6">
                <div className="received opensans-normal-athens-gray-12px">{received1}</div>
              </div>
              <div className="number-35">{number45}</div>
              <div className="number-36">{number46}</div>
              <div className="number-37">{number47}</div>
              <div className="overlap-group1-6">
                <div className="paid opensans-normal-athens-gray-12px">{paid2}</div>
              </div>
              <img className="group-124-1" src={group1247} alt="Group 124" />
              <img className="group-114-1" src={group1148} alt="Group 114" />
              <div className="percent-1">{percent7}</div>
            </div>
            <div className="overlap-group-7 opensans-normal-vulcan-16px">
              <div className="us-foods">{usFoods}</div>
              <div className="phone-1">{phone2}</div>
              <div className="address-11">{address15}</div>
              <div className="overlap-group-10">
                <div className="pending opensans-normal-athens-gray-12px">{pending}</div>
              </div>
              <div className="number-35">{number48}</div>
              <div className="number-36">{number49}</div>
              <div className="number-37">{number50}</div>
              <div className="overlap-group1-8">
                <div className="paid opensans-normal-athens-gray-12px">{paid3}</div>
              </div>
              <img className="group-124-1" src={group1248} alt="Group 124" />
              <img className="group-114-1" src={group1149} alt="Group 114" />
              <div className="percent-1">{percent8}</div>
            </div>
            <div className="overlap-group-8 opensans-normal-vulcan-16px">
              <div className="ke-he-distributors">{keheDistributors}</div>
              <div className="phone-2">{phone3}</div>
              <div className="address-11">{address16}</div>
              <div className="overlap-group-6">
                <div className="received opensans-normal-athens-gray-12px">{received2}</div>
              </div>
              <div className="number-35">{number51}</div>
              <div className="number-36">{number52}</div>
              <div className="number-37">{number53}</div>
              <div className="overlap-group1-6">
                <div className="paid opensans-normal-athens-gray-12px">{paid4}</div>
              </div>
              <img className="group-124-1" src={group1249} alt="Group 124" />
              <img className="group-114-1" src={group11410} alt="Group 114" />
              <div className="percent-1">{percent9}</div>
            </div>
            <div className="overlap-group-7 opensans-normal-vulcan-16px">
              <div className="name-6">{name}</div>
              <div className="phone-3">{phone4}</div>
              <div className="address-11">{address17}</div>
              <div className="overlap-group-6">
                <div className="received opensans-normal-athens-gray-12px">{received3}</div>
              </div>
              <div className="number-35">{number54}</div>
              <div className="number-36">{number55}</div>
              <div className="number-37">{number56}</div>
              <div className="overlap-group1-6">
                <div className="paid opensans-normal-athens-gray-12px">{paid5}</div>
              </div>
              <img className="group-124-1" src={group12410} alt="Group 124" />
              <img className="group-114-1" src={group11411} alt="Group 114" />
              <div className="percent-1">{percent10}</div>
            </div>
            <div className="overlap-group-8 opensans-normal-vulcan-16px">
              <div className="surname">{surname}</div>
              <div className="phone-4">{phone5}</div>
              <div className="address-11">{address18}</div>
              <div className="overlap-group-11">
                <div className="received opensans-normal-athens-gray-12px">{received4}</div>
              </div>
              <div className="number-35">{number57}</div>
              <div className="number-36">{number58}</div>
              <div className="number-37">{number59}</div>
              <div className="overlap-group1-9">
                <div className="paid opensans-normal-athens-gray-12px">{paid6}</div>
              </div>
              <img className="group-124-1" src={group12411} alt="Group 124" />
              <img className="group-114-1" src={group11412} alt="Group 114" />
              <div className="percent-1">{percent11}</div>
            </div>
            <div className="overlap-group-7 opensans-normal-vulcan-16px">
              <div className="distant-lands-coffee">{distantLandsCoffee}</div>
              <div className="phone-5">{phone6}</div>
              <div className="address-11">{address19}</div>
              <div className="overlap-group-6">
                <div className="received opensans-normal-athens-gray-12px">{received5}</div>
              </div>
              <div className="number-35">{number60}</div>
              <div className="number-36">{number61}</div>
              <div className="number-37">{number62}</div>
              <div className="overlap-group1-6">
                <div className="paid opensans-normal-athens-gray-12px">{paid7}</div>
              </div>
              <img className="group-124-1" src={group12412} alt="Group 124" />
              <img className="group-114-1" src={group11413} alt="Group 114" />
              <div className="percent-1">{percent12}</div>
            </div>
            <div className="overlap-group-8 opensans-normal-vulcan-16px">
              <div className="mercon-coffee-group">{merconCoffeeGroup}</div>
              <div className="phone-6">{phone7}</div>
              <div className="address-11">{address20}</div>
              <div className="overlap-group-6">
                <div className="received opensans-normal-athens-gray-12px">{received6}</div>
              </div>
              <div className="number-35">{number63}</div>
              <div className="number-36">{number64}</div>
              <div className="number-37">{number65}</div>
              <div className="overlap-group1-6">
                <div className="paid opensans-normal-athens-gray-12px">{paid8}</div>
              </div>
              <img className="group-124-1" src={group12413} alt="Group 124" />
              <img className="group-114-1" src={group11414} alt="Group 114" />
              <div className="percent-1">{percent13}</div>
            </div>
            <div className="overlap-group-7 opensans-normal-vulcan-16px">
              <div className="european-coffee-trip">{europeanCoffeeTrip}</div>
              <div className="phone-7">{phone8}</div>
              <div className="address-11">{address21}</div>
              <div className="overlap-group-6">
                <div className="received opensans-normal-athens-gray-12px">{received7}</div>
              </div>
              <div className="number-35">{number66}</div>
              <div className="number-36">{number67}</div>
              <div className="number-37">{number68}</div>
              <div className="overlap-group1-6">
                <div className="paid opensans-normal-athens-gray-12px">{paid9}</div>
              </div>
              <img className="group-124-1" src={group12414} alt="Group 124" />
              <img className="group-114-1" src={group11415} alt="Group 114" />
              <div className="percent-1">{percent14}</div>
            </div>
            <div className="overlap-group-8 opensans-normal-vulcan-16px">
              <div className="gavia-gourmet">{gaviaGourmet}</div>
              <div className="phone-8">{phone9}</div>
              <div className="address-11">{address22}</div>
              <div className="overlap-group-6">
                <div className="received opensans-normal-athens-gray-12px">{received8}</div>
              </div>
              <div className="number-35">{number69}</div>
              <div className="number-36">{number70}</div>
              <div className="number-37">{number71}</div>
              <div className="overlap-group1-6">
                <div className="paid opensans-normal-athens-gray-12px">{paid10}</div>
              </div>
              <img className="group-124-1" src={group12415} alt="Group 124" />
              <img className="group-114-1" src={group11416} alt="Group 114" />
              <div className="percent-1">{percent15}</div>
            </div>
            <div className="see-all-products-list-1 opensans-normal-cobalt-20px">{seeAllProductsList2}</div>
          </div>
          <img className="group-135" src={group135} alt="Group 135" />
        </div>
      </div>
    </div>
  );
}

export default InventoryManagementPage;
