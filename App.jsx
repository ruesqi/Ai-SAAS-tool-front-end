import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FraudAndSecurityDetectionPage from "./components/FraudAndSecurityDetectionPage";
import SignInPage from "./components/SignInPage";
import SalesManagementPage from "./components/SalesManagementPage";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import InventoryAdvanceAnalyticsPage from "./components/InventoryAdvanceAnalyticsPage";
import SalesAdvanceAnalyticsPage from "./components/SalesAdvanceAnalyticsPage";
import InventoryManagementPage from "./components/InventoryManagementPage";
import HomePage2 from "./components/HomePage2";
import HomePage3 from "./components/HomePage3";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fraud-and-security-detection-page">
          <FraudAndSecurityDetectionPage {...fraudAndSecurityDetectionPageData} />
        </Route>
        <Route path="/:path(|sign-in-page)">
          <SignInPage {...signInPageData} />
        </Route>
        <Route path="/sales-management-page">
          <SalesManagementPage {...salesManagementPageData} />
        </Route>
        <Route path="/home-page">
          <HomePage {...homePageData} />
        </Route>
        <Route path="/register-page">
          <RegisterPage {...registerPageData} />
        </Route>
        <Route path="/inventory-advance-analytics-page">
          <InventoryAdvanceAnalyticsPage {...inventoryAdvanceAnalyticsPageData} />
        </Route>
        <Route path="/sales-advance-analytics-page">
          <SalesAdvanceAnalyticsPage {...salesAdvanceAnalyticsPageData} />
        </Route>
        <Route path="/inventory-management-page">
          <InventoryManagementPage {...inventoryManagementPageData} />
        </Route>
        <Route path="/home-page-2">
          <HomePage2 {...homePage2Data} />
        </Route>
        <Route path="/home-page2">
          <HomePage3 {...homePage3Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const fraudAndSecurityDetectionPageData = {
    group90: "/img/group-90-4@2x.png",
    optimizeAi: "OPTIMIZE AI",
    iconHome: "/img/group-1@2x.png",
    place: "Home",
    group30: "/img/group-30-1@2x.png",
    inventoryManagement: "Inventory Management",
    group33: "/img/group-33@2x.png",
    salesManagement: "Sales Management",
    group39: "/img/group-39-1@2x.png",
    fraudAndSecurityDetection: "Fraud and Security Detection",
    group386: "/img/group-386@2x.png",
    title: "User Authentication",
    ensuresSecureAcces: <React.Fragment>ensures secure access by verifying<br />the identity of users trying to log in<br />to the inventory management tool<br />web app.</React.Fragment>,
    disputeManagement: "Dispute Management",
    providesAStreamlin: <React.Fragment>Provides a streamlined process for<br />managing and resolving disputes<br />or conflicts related to orders,<br />payments, or transactions.</React.Fragment>,
    group387: "/img/group-387@2x.png",
    transactionMonitoring: "Transaction Monitoring",
    enhancesSecurityAn: <React.Fragment>enhances security and detects<br />suspicious activities by continuously<br />analyzing and tracking user<br />transactions</React.Fragment>,
    group398: "/img/group-398@2x.png",
    privacyPolicy: "Privacy Policy",
    clearlyOutlinesThe: <React.Fragment>Clearly outlines the handling,<br />collection, and protection of user<br />data to ensure transparency and<br />compliance with privacy regulations.</React.Fragment>,
    realTimeAlertSystem: "Real Time Alert System",
    instantlyNotifiesU: <React.Fragment>Instantly notifies users of critical<br />events or updates within the web<br />app to ensure timely action and<br />response.</React.Fragment>,
    termsOfService: "Terms of Service",
    theLegalAgreement: <React.Fragment>the legal agreement between the<br />user and the web app, defining the<br />terms of use, responsibilities,<br />and limitations.</React.Fragment>,
    fraudulentScore: "Fraudulent Score",
    calculatesAndDispl: <React.Fragment>Calculates and displays a risk<br />assessment score indicating the<br />likelihood of fraudulent activity<br />associated with users or<br />transactions.</React.Fragment>,
    customerSupport: "Customer Support",
    offersAssistanceG: <React.Fragment>Offers assistance, guidance, and<br />problem-solving to users through<br />various channels, promoting a<br />positive user experience and<br />satisfaction.</React.Fragment>,
};

const group471Data = {
    averageSale: "Average Sale",
    price: "$ 0.00",
};

const group472Data = {
    averageSale: "Transactions",
    price: "00",
    className: "group-46-1",
};

const group5421Data = {
    newCustomers: "Total Customers",
};

const group5422Data = {
    newCustomers: "New Customers",
    className: "group-5-2",
};

const group5423Data = {
    newCustomers: "Returning customers",
    className: "group-5-3",
};

const group5424Data = {
    newCustomers: "Average Spending per visit",
    className: "group-5-4",
};

const group5425Data = {
    newCustomers: "Average visits per customer",
    className: "group-5-5",
};

const group5426Data = {
    newCustomers: "Positive Feedback",
    className: "group-5-6",
};

const group5427Data = {
    newCustomers: "Negative Feedback",
    className: "group-5",
};

const group531Data = {
    arabicaCoffeeBeans: "Arabica Coffee Beans",
};

const group532Data = {
    arabicaCoffeeBeans: "Cow Milk",
    className: "group-54",
};

const group533Data = {
    arabicaCoffeeBeans: "Buffalo Milk",
    className: "group-55",
};

const group534Data = {
    arabicaCoffeeBeans: "Sugar",
    className: "group-5-7-1",
};

const group535Data = {
    arabicaCoffeeBeans: "Cups and Lids",
    className: "group-57",
};

const group536Data = {
    arabicaCoffeeBeans: "Grinders",
    className: "group-58",
};

const group537Data = {
    arabicaCoffeeBeans: "Hot Chocolate",
    className: "group-59",
};

const group538Data = {
    arabicaCoffeeBeans: "Coffee-related Items",
    className: "group-53-2",
};

const group539Data = {
    arabicaCoffeeBeans: "Beverage Items",
    className: "group-54-1",
};

const group5310Data = {
    arabicaCoffeeBeans: "Accessories and serving Items",
    className: "group-55-1",
};

const group5311Data = {
    arabicaCoffeeBeans: "Miscellaneous Items",
    className: "group-56",
};

const group5312Data = {
    arabicaCoffeeBeans: "Packaging and Storage",
    className: "group-57-1",
};

const group5313Data = {
    arabicaCoffeeBeans: "Menu",
    className: "group-5-7",
};

const group5314Data = {
    arabicaCoffeeBeans: "Display and Merchandising",
    className: "group-59-1",
};

const salesManagementPageData = {
    group90: "/img/group-90-4@2x.png",
    optimizeAi: "OPTIMIZE AI",
    title: "Sales Data",
    name: "April 26",
    totalSalesOverTime: "Total Sales over time",
    number1: "700",
    number2: "600",
    number3: "500",
    number4: "400",
    number5: "300",
    number6: "200",
    number7: "100",
    number8: "0",
    address1: "4 am",
    address2: "8 am",
    price: "12 pm",
    address3: "4 pm",
    address4: "8 pm",
    today: "Today",
    lastWednesday: "Last Wednesday",
    todaySSale: "Today ‘s Sale",
    topItemBySale: "Top Item by Sale",
    topCategoriesByItem: "Top Categories by Item",
    monthly: "Monthly",
    weekly: "Weekly",
    daily: "Daily",
    orderSummary: "Order Summary",
    x6K: "6k",
    x5K: "5k",
    x4K: "4k",
    x3K: "3k",
    x2K: "2k",
    x1K: "1k",
    apr5: "Apr 5",
    apr10: "Apr 10",
    apr15: "Apr 15",
    apr20: "Apr 20",
    apr25: "Apr 25",
    apr30: "Apr 30",
    iconHome: "/img/group@2x.png",
    place: "Home",
    group30: "/img/group-30-1@2x.png",
    inventoryManagement: "Inventory Management",
    group33: "/img/group-33-1@2x.png",
    salesManagement: "Sales Management",
    group39: "/img/group-39@2x.png",
    fraudAndSecurityDetection: "Fraud and Security Detection",
    group471Props: group471Data,
    group472Props: group472Data,
    group5421Props: group5421Data,
    group5422Props: group5422Data,
    group5423Props: group5423Data,
    group5424Props: group5424Data,
    group5425Props: group5425Data,
    group5426Props: group5426Data,
    group5427Props: group5427Data,
    group531Props: group531Data,
    group532Props: group532Data,
    group533Props: group533Data,
    group534Props: group534Data,
    group535Props: group535Data,
    group536Props: group536Data,
    group537Props: group537Data,
    group538Props: group538Data,
    group539Props: group539Data,
    group5310Props: group5310Data,
    group5311Props: group5311Data,
    group5312Props: group5312Data,
    group5313Props: group5313Data,
    group5314Props: group5314Data,
};

const group473Data = {
    averageSale: "Average Sale",
    price: "$ 0.00",
};

const group474Data = {
    averageSale: "Transactions",
    price: "00",
    className: "group-46-1",
};

const frame942Data = {
    className: "frame-94-1",
};

const group5428Data = {
    newCustomers: "New Customers",
    className: "group-5-1-1",
};

const group5429Data = {
    newCustomers: "Returning customers",
    className: "group-5-1-2",
};

const group54210Data = {
    newCustomers: "Average Spending per visit",
    className: "group-5-1-3",
};

const group54211Data = {
    newCustomers: "Average visits per customer",
    className: "group-5-1-4",
};

const group54212Data = {
    newCustomers: "Positive Feedback",
    className: "group-5-1-5",
};

const group54213Data = {
    newCustomers: "Negative Feedback",
    className: "group-5-1",
};

const group701Data = {
    src: "/img/group-68@2x.png",
};

const group702Data = {
    src: "/img/group-69@2x.png",
};

const group703Data = {
    src: "/img/group-89@2x.png",
};

const homePageData = {
    title: "Sales Overview",
    inventoryOverview1: "Inventory Overview",
    name: "April 26",
    totalSalesOverTime: "Total Sales over time",
    number1: "700",
    number2: "600",
    number3: "500",
    number4: "400",
    number5: "300",
    number6: "200",
    number7: "100",
    number8: "0",
    address1: "4 am",
    address2: "8 am",
    price1: "12 pm",
    address3: "4 pm",
    address4: "8 pm",
    today1: "Today",
    lastWednesday: "Last Wednesday",
    inventoryOverview2: "Inventory Overview",
    totalCustomers1: "Total Customers",
    totalCustomers2: "Total Customers",
    number9: "0",
    today2: "Today",
    paymentTypes: "Payment Types",
    noSalesYetToday: "No Sales yet today",
    topItemBySales: "Top item by sales",
    noItemSalesToday1: "No item sales today",
    topCategoriesByItem: "Top categories by item",
    noItemSalesToday2: "No item sales today",
    iconHome: "/img/group-2@2x.png",
    place1: "Home",
    group30: "/img/group-30-1@2x.png",
    inventoryManagement: "Inventory Management",
    group33: "/img/group-33@2x.png",
    salesManagement: "Sales Management",
    group39: "/img/group-39@2x.png",
    fraudAndSecurityDetection: "Fraud and Security Detection",
    totalPurchase: "Total Purchase",
    price2: "$ 1000",
    totalPurchaseDue: "Total Purchase due",
    price3: "$ 300",
    totalSuppliers: "Total Suppliers",
    number10: "100",
    currentStockLevels: "Current Stock Levels",
    itemName1: "Item Name",
    number11: "1",
    milk1: "Milk",
    number12: "2",
    napkins1: "Napkins",
    number13: "3",
    arabicaBeans1: "Arabica beans",
    number14: "4",
    place2: "Tea",
    number15: "5",
    sweetener1: "Sweetener",
    stockKeepingUnitSku: "Stock Keeping Unit(SKU)",
    number16: "100",
    number17: "200",
    number18: "50",
    number19: "50",
    number20: "150",
    stockAvailability: "Stock Availability",
    itemName2: "Item Name",
    number21: "1",
    milk2: "Milk",
    number22: "2",
    napkins2: "Napkins",
    number23: "3",
    arabicaBeans2: "Arabica beans",
    number24: "4",
    place3: "Tea",
    number25: "5",
    sweetener2: "Sweetener",
    leadTimeInDays: "Lead Time(in days)",
    number26: "05",
    number27: "20",
    number28: "10",
    number29: "07",
    number30: "08",
    group471Props: group473Data,
    group472Props: group474Data,
    frame94Props: frame942Data,
    group5421Props: group5428Data,
    group5422Props: group5429Data,
    group5423Props: group54210Data,
    group5424Props: group54211Data,
    group5425Props: group54212Data,
    group5426Props: group54213Data,
    group701Props: group701Data,
    group702Props: group702Data,
    group703Props: group703Data,
};

const frame933Data = {
    className: "frame-93-1",
};

const inventoryAdvanceAnalyticsPageData = {
    group90: "/img/group-90-4@2x.png",
    optimizeAi: "OPTIMIZE AI",
    title: "Inventory Forecasting",
    group35: "/img/arrow---caret-down-md@2x.png",
    number1: "600",
    number2: "500",
    number3: "400",
    number4: "300",
    number5: "200",
    number6: "100",
    coffeeBeans: "Coffee Beans",
    milk: "Milk",
    cups: "Cups",
    napkin: "Napkin",
    sweetener: "Sweetener",
    straws: "Straws",
    place1: "Tea",
    previousMonth: "Previous Month",
    presentMonth: "Present Month",
    nextMonth: "Next Month",
    spanText1: <React.Fragment>Based on the average monthly sales of past month and present month volume, you need to order the following quantities of each item:<br /></React.Fragment>,
    spanText2: <React.Fragment><br /></React.Fragment>,
    spanText3: <React.Fragment>Coffee beans: 100 pounds<br />Milk: 200 gallons<br />Syrups and flavorings: 10 bottles each<br />Cups, lids, and straws: 1,000 each<br />Napkins and paper towels: 1,000 each<br />Sweeteners: 10 boxes each<br />Baked goods: 500 units<br />Sandwich ingredients: 500 units</React.Fragment>,
    orderedQuantity: "Ordered Quantity",
    itemNames: "Item Names",
    requiredItemListForNextMonth: "Required Item List for next month:",
    iconHome: "/img/group@2x.png",
    place2: "Home",
    group33: "/img/group-33@2x.png",
    salesManagement: "Sales Management",
    group39: "/img/group-39@2x.png",
    fraudAndSecurityDetection: "Fraud and Security Detection",
    frame93Props: frame933Data,
};

const group16931Data = {
    number: "2023",
};

const group16922Data = {
    className: "group-169-8",
};

const group1694Data = {
    className: "group-169-7",
};

const group16932Data = {
    number: "2022",
    className: "group-1-1",
};

const salesAdvanceAnalyticsPageData = {
    group90: "/img/group-90-4@2x.png",
    optimizeAi: "OPTIMIZE AI",
    title: "Sales Forecasting",
    group1371: "/img/group-137-2@2x.png",
    group35: "/img/arrow---caret-down-md-5@2x.png",
    number1: "600",
    number2: "500",
    number3: "400",
    number4: "300",
    number5: "200",
    number6: "100",
    number7: "2022",
    january: "January",
    number8: "2022",
    february: "February",
    number9: "2022",
    number10: "2023",
    place1: "March",
    name1: "April",
    name2: "May",
    number11: "2023",
    name3: "June",
    number12: "2023",
    july: "July",
    number13: "2022",
    name4: "August",
    number14: "2023",
    september: "September",
    number15: "2022",
    number16: "2023",
    october: "October",
    number17: "2022",
    number18: "2023",
    november: "November",
    number19: "2022",
    number20: "2023",
    december: "December",
    revenueInThousandsUsd: "Revenue(in thousands USD)",
    milk: "Milk",
    group1372: "/img/group-137@2x.png",
    salesPrediction: "Sales Prediction:",
    iconHome: "/img/group@2x.png",
    place2: "Home",
    group30: "/img/group-30-4@2x.png",
    inventoryManagement: "Inventory Management",
    group33: "/img/group-33-1@2x.png",
    salesManagement: "Sales Management",
    group39: "/img/group-39-2@2x.png",
    fraudAndSecurityDetection: "Fraud and Security Detection",
    group16931Props: group16931Data,
    group1692Props: group16922Data,
    group169Props: group1694Data,
    group16932Props: group16932Data,
};

const group312Data = {
    className: "group-31-4",
};

const group1181Data = {
    address: "6 month",
};

const group1182Data = {
    address: "1 month",
    className: "group-12-9",
};

const group1183Data = {
    address: "1 month",
    className: "group-12-9",
};

const inventoryManagementPageData = {
    group90: "/img/group-90-4@2x.png",
    optimizeAi: "OPTIMIZE AI",
    inventoryData: "Inventory Data",
    currentStockLevels: "Current Stock Levels",
    itemName1: "Item Name",
    number1: "1",
    milk1: "Milk",
    number2: "2",
    napkins1: "Napkins",
    number3: "3",
    arabicaBeans1: "Arabica beans",
    number4: "4",
    place1: "Tea",
    number5: "5",
    sweetener1: "Sweetener",
    stockKeepingUnitSku: "Stock Keeping Unit(SKU)",
    number6: "100",
    number7: "200",
    number8: "50",
    number9: "50",
    number10: "150",
    stockAvailability: "Stock Availability",
    itemName2: "Item Name",
    leadTimeInDays: "Lead Time(in days)",
    number11: "1",
    milk2: "Milk",
    number12: "05",
    number13: "2",
    napkins2: "Napkins",
    number14: "20",
    number15: "3",
    arabicaBeans2: "Arabica beans",
    number16: "10",
    number17: "4",
    place2: "Tea",
    number18: "07",
    number19: "5",
    sweetener2: "Sweetener",
    number20: "08",
    stockLevels: "Stock Levels",
    storeNameLocation: "Store Name(Location)",
    number21: "1",
    spanText1: "Starbucks, ",
    spanText2: "LA",
    number22: "2",
    spanText3: "Starbucks, ",
    spanText4: "NYC",
    number23: "3",
    spanText5: "Starbucks, ",
    spanText6: "SOHO",
    place3: "Full",
    medium1: "Medium",
    low: "Low",
    stockLevel1: "Stock Level",
    percent1: "80%",
    percent2: "90%",
    percent3: "10%",
    number24: "4",
    spanText7: "Starbucks, ",
    spanText8: "TRIBECA",
    percent4: "50%",
    number25: "5",
    spanText9: "Starbucks, ",
    spanText10: "NJ",
    percent5: "30%",
    iconHome: "/img/group@2x.png",
    place4: "Home",
    group33: "/img/group-33@2x.png",
    salesManagement: "Sales Management",
    group39: "/img/group-39@2x.png",
    fraudAndSecurityDetection: "Fraud and Security Detection",
    addInventory: "Add Inventory",
    group971: "/img/group-97@2x.png",
    group972: "/img/group-97-3@2x.png",
    addNewItem: "Add New Item",
    lowStockLevel: "Low Stock Level",
    expiringSoon: "Expiring soon",
    itemName3: "Item Name",
    referenceNumber: <React.Fragment>Reference<br />Number</React.Fragment>,
    orderedQuantity: <React.Fragment>Ordered<br />Quantity</React.Fragment>,
    stockLevel2: "Stock Level",
    reorderPoints: <React.Fragment>Reorder<br />Points</React.Fragment>,
    lastOrderDates: <React.Fragment>Last order<br />Dates</React.Fragment>,
    remainingShelfLife: <React.Fragment>Remaining<br />Shelf-life</React.Fragment>,
    carryingCost: <React.Fragment>Carrying<br />Cost</React.Fragment>,
    stockoutCost: <React.Fragment>Stockout<br />Cost</React.Fragment>,
    action1: "Action",
    milk3: "Milk",
    rid_01: "Rid_01",
    number26: "100",
    address1: "30 unit",
    address2: "25 unit",
    date1: "20-04-23",
    address3: "20 days",
    number27: "380",
    number28: "450",
    group1241: "/img/group-124@2x.png",
    group1141: "/img/group-114-4@2x.png",
    arabicaBeans3: "Arabica Beans",
    rid_02: "Rid_02",
    x50Kg: "50kg",
    x40Kg1: "40kg",
    x05Kg: "05kg",
    date2: "23-04-23",
    address4: "60 days",
    number29: "300",
    number30: "420",
    group1242: "/img/group-124@2x.png",
    group1142: "/img/group-114-4@2x.png",
    napkins3: "Napkins",
    rid_03: "Rid_03",
    number31: "100",
    address5: "30 unit",
    address6: "25 unit",
    date3: "20-04-23",
    address7: "20 days",
    number32: "250",
    number33: "350",
    group1243: "/img/group-124@2x.png",
    group1143: "/img/group-114-4@2x.png",
    place5: "Tea",
    rid_04: "Rid_04",
    number34: "50",
    x40Kg2: "40kg",
    number35: "05",
    date4: "23-04-23",
    address8: "60 days",
    number36: "260",
    number37: "360",
    group1244: "/img/group-124@2x.png",
    group1144: "/img/group-114-4@2x.png",
    cutlery: "Cutlery",
    rid_05: "Rid_05",
    number38: "100",
    address9: "30 unit",
    address10: "25 unit",
    date5: "20-04-23",
    address11: "20 days",
    number39: "100",
    number40: "150",
    group1245: "/img/group-124@2x.png",
    group1145: "/img/group-114-4@2x.png",
    syrups: "Syrups",
    rid_06: "Rid_06",
    number41: "50",
    x40Kg3: "40kg",
    number42: "05",
    date6: "23-04-23",
    address12: "60 days",
    number43: "180",
    number44: "260",
    group1246: "/img/group-124@2x.png",
    group1146: "/img/group-114-4@2x.png",
    seeAllItemList: "SEE ALL ITEM LIST...",
    group121: "/img/group-12@2x.png",
    searchItemNameOrLocation: "Search Item name or Location",
    group1171: "/img/group-117@2x.png",
    spanText11: "Turnover Rates: ",
    spanText12: "67%",
    advanceAnalytics: "Advance Analytics",
    group50: "/img/group-50@2x.png",
    title: "Product Data",
    group122: "/img/group-12@2x.png",
    searchProductByPr: "Search product by Product Name or Reference No",
    group1172: "/img/group-117@2x.png",
    addProduct: "Add Product",
    group973: "/img/group-97@2x.png",
    spanText13: "Cow Milk ",
    spanText14: "(R_02)",
    theArabicaIsAHig: <React.Fragment>The Arabica is a high-quality bean. You can think of it as the Rolls Royce of the coffee beans.<br />It has a light, sweet and airy taste.</React.Fragment>,
    category: "Category:",
    dairyProduct: "Dairy Product",
    cost: "Cost:",
    price1: "20.45 USD",
    subCategory: "Sub-category:",
    liquidMilk: "Liquid Milk",
    margin: "Margin:",
    percent6: "30%",
    productSize: "Product Size:",
    medium2: "Medium",
    price2: "Price:",
    price3: "52.33 USD",
    shelfLife: "Shelf Life:",
    address13: "1 month",
    group113: "/img/group-113@2x.png",
    group1147: "/img/group-114@2x.png",
    seeAllProductsList1: "SEE ALL PRODUCTS LIST...",
    supplierData: "Supplier Data",
    group123: "/img/group-12@2x.png",
    searchBySupplierNameOrReference: "Search by Supplier Name or Reference",
    group1173: "/img/group-117@2x.png",
    addNewPurchase: "Add New Purchase",
    group974: "/img/group-97@2x.png",
    supplierName: <React.Fragment>Supplier<br />Name</React.Fragment>,
    place6: "Contact",
    place7: "Date",
    status: "Status",
    grandTotal: <React.Fragment>Grand<br />Total</React.Fragment>,
    paid1: "Paid",
    due: "Due",
    paymentStatus: <React.Fragment>Payment<br />Status</React.Fragment>,
    action2: "Action",
    performanceMetrices: <React.Fragment>Performance<br />Metrices</React.Fragment>,
    syscoCorporation: "Sysco Corporation",
    phone1: "12013618493",
    address14: "19 Dec 2022",
    received1: "Received",
    number45: "600",
    number46: "120",
    number47: "380",
    paid2: "Paid",
    group1247: "/img/group-124@2x.png",
    group1148: "/img/group-114-4@2x.png",
    percent7: "90%",
    usFoods: "US Foods",
    phone2: "12013618493",
    address15: "19 Dec 2022",
    pending: "Pending",
    number48: "600",
    number49: "120",
    number50: "380",
    paid3: "Paid",
    group1248: "/img/group-124@2x.png",
    group1149: "/img/group-114-4@2x.png",
    percent8: "90%",
    keheDistributors: "KeHE Distributors",
    phone3: "12013618493",
    address16: "19 Dec 2022",
    received2: "Received",
    number51: "600",
    number52: "120",
    number53: "380",
    paid4: "Paid",
    group1249: "/img/group-124@2x.png",
    group11410: "/img/group-114-4@2x.png",
    percent9: "90%",
    name: "Royal Cup Coffee",
    phone4: "12013618493",
    address17: "19 Dec 2022",
    received3: "Received",
    number54: "600",
    number55: "120",
    number56: "380",
    paid5: "Paid",
    group12410: "/img/group-124@2x.png",
    group11411: "/img/group-114-4@2x.png",
    percent10: "90%",
    surname: "Farmer Brothers",
    phone5: "12013618493",
    address18: "19 Dec 2022",
    received4: "Received",
    number57: "600",
    number58: "120",
    number59: "380",
    paid6: "Paid",
    group12411: "/img/group-124@2x.png",
    group11412: "/img/group-114-4@2x.png",
    percent11: "90%",
    distantLandsCoffee: "Distant Lands Coffee",
    phone6: "12013618493",
    address19: "19 Dec 2022",
    received5: "Received",
    number60: "600",
    number61: "120",
    number62: "380",
    paid7: "Paid",
    group12412: "/img/group-124@2x.png",
    group11413: "/img/group-114-4@2x.png",
    percent12: "90%",
    merconCoffeeGroup: "Mercon Coffee Group",
    phone7: "12013618493",
    address20: "19 Dec 2022",
    received6: "Received",
    number63: "600",
    number64: "120",
    number65: "380",
    paid8: "Paid",
    group12413: "/img/group-124@2x.png",
    group11414: "/img/group-114-4@2x.png",
    percent13: "90%",
    europeanCoffeeTrip: "European Coffee Trip",
    phone8: "12013618493",
    address21: "19 Dec 2022",
    received7: "Received",
    number66: "600",
    number67: "120",
    number68: "380",
    paid9: "Paid",
    group12414: "/img/group-124@2x.png",
    group11415: "/img/group-114-4@2x.png",
    percent14: "90%",
    gaviaGourmet: "Gaviña Gourmet",
    phone9: "12013618493",
    address22: "19 Dec 2022",
    received8: "Received",
    number69: "600",
    number70: "120",
    number71: "380",
    paid10: "Paid",
    group12415: "/img/group-124@2x.png",
    group11416: "/img/group-114-4@2x.png",
    percent15: "90%",
    seeAllProductsList2: "SEE ALL PRODUCTS LIST...",
    group135: "/img/group-135@2x.png",
    group31Props: group312Data,
    group1181Props: group1181Data,
    group1182Props: group1182Data,
    group1183Props: group1183Data,
};

const group922Data = {
    className: "group-92-3",
};

const group147Data = {
    className: "group-14-6",
};

const group207Data = {
    className: "group-20-6",
};

const group197Data = {
    className: "group-19-6",
};

const group7521Data = {
    group92Props: group922Data,
    group14Props: group147Data,
    group20Props: group207Data,
    group19Props: group197Data,
};

const group463Data = {
    className: "group-46-2",
};

const group475Data = {
    averageSale: "Average Sale",
    price: "$ 0.00",
    className: "group-47",
};

const group476Data = {
    averageSale: "Transactions",
    price: "00",
    className: "group-48",
};

const frame22Data = {
    className: "frame-2-4",
};

const group54222Data = {
    newCustomers: "New Customers",
};

const group54223Data = {
    newCustomers: "Returning customers",
    className: "group-5-8-2",
};

const group54224Data = {
    newCustomers: "Average Spending per visit",
    className: "group-5-8-3",
};

const group54225Data = {
    newCustomers: "Average visits per customer",
    className: "group-5-8-4",
};

const group54226Data = {
    newCustomers: "Positive Feedback",
    className: "group-5-8-5",
};

const group54227Data = {
    newCustomers: "Negative Feedback",
    className: "group-5-8",
};

const group511Data = {
    group39: "/img/group-39-2@2x.png",
};

const group704Data = {
    src: "/img/group-68@2x.png",
};

const group705Data = {
    src: "/img/group-69@2x.png",
};

const group706Data = {
    src: "/img/group-89@2x.png",
};

const homePage2Data = {
    title: "Sales Overview",
    inventoryOverview1: "Inventory Overview",
    name: "April 26",
    totalSalesOverTime: "Total Sales over time",
    number1: "700",
    number2: "600",
    number3: "500",
    number4: "400",
    number5: "300",
    number6: "200",
    number7: "100",
    number8: "0",
    address1: "4 am",
    address2: "8 am",
    price1: "12 pm",
    address3: "4 pm",
    address4: "8 pm",
    today1: "Today",
    lastWednesday: "Last Wednesday",
    advanceAnalytics: "Advance Analytics",
    group50: "/img/group-50@2x.png",
    inventoryOverview2: "Inventory Overview",
    totalCustomers1: "Total Customers",
    totalCustomers2: "Total Customers",
    number9: "0",
    today2: "Today",
    paymentTypes: "Payment Types",
    noSalesYetToday: "No Sales yet today",
    topItemBySales: "Top item by sales",
    noItemSalesToday1: "No item sales today",
    topCategoriesByItem: "Top categories by item",
    noItemSalesToday2: "No item sales today",
    group30: "/img/group-30-4@2x.png",
    inventoryManagement: "Inventory Management",
    group33: "/img/group-33@2x.png",
    salesManagement: "Sales Management",
    totalPurchase: "Total Purchase",
    price2: "$ 1000",
    totalPurchaseDue: "Total Purchase due",
    price3: "$ 300",
    totalSuppliers: "Total Suppliers",
    number10: "100",
    group752Props: group7521Data,
    group46Props: group463Data,
    group471Props: group475Data,
    group472Props: group476Data,
    frame2Props: frame22Data,
    group54221Props: group54222Data,
    group54222Props: group54223Data,
    group54223Props: group54224Data,
    group54224Props: group54225Data,
    group54225Props: group54226Data,
    group54226Props: group54227Data,
    group51Props: group511Data,
    group701Props: group704Data,
    group702Props: group705Data,
    group703Props: group706Data,
};

const group923Data = {
    className: "group-92-4",
};

const group148Data = {
    className: "group-14-7",
};

const group208Data = {
    className: "group-20-7",
};

const group198Data = {
    className: "group-19-7",
};

const group7522Data = {
    group92Props: group923Data,
    group14Props: group148Data,
    group20Props: group208Data,
    group19Props: group198Data,
};

const group464Data = {
    className: "group-46-3",
};

const group477Data = {
    averageSale: "Average Sale",
    price: "$ 0.00",
    className: "group-47-1",
};

const group478Data = {
    averageSale: "Transactions",
    price: "00",
    className: "group-48-1",
};

const frame23Data = {
    className: "frame-2-5",
};

const group54228Data = {
    newCustomers: "New Customers",
};

const group54229Data = {
    newCustomers: "Returning customers",
    className: "group-5-9-2",
};

const group542210Data = {
    newCustomers: "Average Spending per visit",
    className: "group-5-9-3",
};

const group542211Data = {
    newCustomers: "Average visits per customer",
    className: "group-5-9-4",
};

const group542212Data = {
    newCustomers: "Positive Feedback",
    className: "group-5-9-5",
};

const group542213Data = {
    newCustomers: "Negative Feedback",
    className: "group-5-9",
};

const group512Data = {
    group39: "/img/group-39-2@2x.png",
};

const group707Data = {
    src: "/img/group-68@2x.png",
};

const group708Data = {
    src: "/img/group-69@2x.png",
};

const group709Data = {
    src: "/img/group-89@2x.png",
};

const homePage3Data = {
    title: "Sales Overview",
    inventoryOverview1: "Inventory Overview",
    name: "April 26",
    totalSalesOverTime: "Total Sales over time",
    number1: "700",
    number2: "600",
    number3: "500",
    number4: "400",
    number5: "300",
    number6: "200",
    number7: "100",
    number8: "0",
    address1: "4 am",
    address2: "8 am",
    price1: "12 pm",
    address3: "4 pm",
    address4: "8 pm",
    today1: "Today",
    lastWednesday: "Last Wednesday",
    advanceAnalytics: "Advance Analytics",
    group50: "/img/group-50@2x.png",
    inventoryOverview2: "Inventory Overview",
    totalCustomers1: "Total Customers",
    totalCustomers2: "Total Customers",
    number9: "0",
    today2: "Today",
    paymentTypes: "Payment Types",
    noSalesYetToday: "No Sales yet today",
    topItemBySales: "Top item by sales",
    noItemSalesToday1: "No item sales today",
    topCategoriesByItem: "Top categories by item",
    noItemSalesToday2: "No item sales today",
    group30: "/img/group-30-4@2x.png",
    inventoryManagement: "Inventory Management",
    group33: "/img/group-33@2x.png",
    salesManagement: "Sales Management",
    totalPurchase: "Total Purchase",
    price2: "$ 1000",
    totalPurchaseDue: "Total Purchase due",
    price3: "$ 300",
    totalSuppliers: "Total Suppliers",
    number10: "100",
    group752Props: group7522Data,
    group46Props: group464Data,
    group471Props: group477Data,
    group472Props: group478Data,
    frame2Props: frame23Data,
    group54221Props: group54228Data,
    group54222Props: group54229Data,
    group54223Props: group542210Data,
    group54224Props: group542211Data,
    group54225Props: group542212Data,
    group54226Props: group542213Data,
    group51Props: group512Data,
    group701Props: group707Data,
    group702Props: group708Data,
    group703Props: group709Data,
};

const signInPageData = {
    group90: "/img/group-90@2x.png",
    optimizeAi: "OPTIMIZE AI",
    title: "Welcome Back!",
    secureLoginSeamle: "Secure Login, Seamless Inventory Control.",
    enterYourEmail: "Enter your email",
    createAPassword: "Create a password",
    spanText1: "I agree to",
    spanText2: " ",
    spanText3: "Terms & Conditions",
    spanText4: " ",
    spanText5: "and",
    spanText6: " ",
    spanText7: "Privacy Policy",
    spanText8: " ",
    spanText9: "of the OptimizeAI.",
    signIn: "Sign In",
    or: "OR",
    spanText10: "Don’t you have an account? ",
    spanText11: "Sign Up",
};

const registerPageData = {
    group90: "/img/group-90@2x.png",
    optimizeAi: "OPTIMIZE AI",
    title: "Create your Account",
    letsGetStartedWi: "Let’s get started with your 30 days of free trial.",
    enterYourEmail: "Enter your email",
    confirmYourEmail: "Confirm your email",
    createAPassword: "Create a password",
    spanText1: "I agree to",
    spanText2: " ",
    spanText3: "Terms & Conditions",
    spanText4: " ",
    spanText5: "and",
    spanText6: " ",
    spanText7: "Privacy Policy",
    spanText8: " ",
    spanText9: "of the OptimizeAI.",
    signUp: "Sign up",
    or: "OR",
    spanText10: "Already have a OptimizeAI Account?",
    spanText11: " ",
    spanText12: "Sign in",
};

