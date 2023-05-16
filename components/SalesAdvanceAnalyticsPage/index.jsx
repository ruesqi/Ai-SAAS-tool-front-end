import React from "react";
import { Link } from "react-router-dom";
import Group14 from "../Group14";
import Group20 from "../Group20";
import Group19 from "../Group19";
import Group18 from "../Group18";
import Group13 from "../Group13";
import Group169 from "../Group169";
import Group1692 from "../Group1692";
import Group170 from "../Group170";
import Group1693 from "../Group1693";
import Group1702 from "../Group1702";
import "./SalesAdvanceAnalyticsPage.css";

function SalesAdvanceAnalyticsPage(props) {
  const {
    group90,
    optimizeAi,
    title,
    group1371,
    group35,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    january,
    number8,
    february,
    number9,
    number10,
    place1,
    name1,
    name2,
    number11,
    name3,
    number12,
    july,
    number13,
    name4,
    number14,
    september,
    number15,
    number16,
    october,
    number17,
    number18,
    november,
    number19,
    number20,
    december,
    revenueInThousandsUsd,
    milk,
    group1372,
    salesPrediction,
    iconHome,
    place2,
    group30,
    inventoryManagement,
    group33,
    salesManagement,
    group39,
    fraudAndSecurityDetection,
    group16931Props,
    group1692Props,
    group169Props,
    group16932Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sales-advance-analytics-page screen">
        <div className="group-75-4">
          <Link to="/home-page">
            <div className="group-92-6">
              <img className="group-90-8" src={group90} alt="Group 90" />
              <div className="optimize-ai-8 opensans-semi-bold-vulcan-14-6px">{optimizeAi}</div>
            </div>
          </Link>
          <Group14 />
          <Group20 />
          <Group19 />
          <Group18 />
        </div>
        <h1 className="title-6 opensans-semi-bold-vulcan-32px">{title}</h1>
        <div className="overlap-group2-4">
          <div className="group-147-1">
            <div className="frame-93-2">
              <Group13 />
              <img className="group-137-6" src={group1371} alt="Group 137" />
            </div>
            <div className="group-35-7" style={{ backgroundImage: `url(${group35})` }}></div>
          </div>
          <div className="group-167-1">
            <div className="number-container-3 opensans-semi-bold-vulcan-16px">
              <div className="number-20">{number1}</div>
              <div className="number-20">{number2}</div>
              <div className="number-20">{number3}</div>
              <div className="number-20">{number4}</div>
              <div className="number-20">{number5}</div>
              <div className="number-20">{number6}</div>
            </div>
            <div className="overlap-group-3">
              <img className="line-25-1" src="/img/line-25.svg" alt="Line 25" />
              <img className="line-26-1" src="/img/line-26.svg" alt="Line 26" />
              <img className="line-34-1" src="/img/line-34.svg" alt="Line 34" />
              <img className="line-35-1" src="/img/line-34.svg" alt="Line 35" />
              <img className="line-36-1" src="/img/line-34.svg" alt="Line 36" />
              <img className="line-37-1" src="/img/line-34.svg" alt="Line 37" />
              <img className="line-38-1" src="/img/line-34.svg" alt="Line 38" />
              <img className="line-39-1" src="/img/line-34.svg" alt="Line 39" />
              <img className="line-40-1" src="/img/line-40.svg" alt="Line 40" />
              <img className="line-41-1" src="/img/line-40.svg" alt="Line 41" />
              <img className="line-42-1" src="/img/line-40.svg" alt="Line 42" />
              <img className="line-43-1" src="/img/line-40.svg" alt="Line 43" />
              <img className="line-44-1" src="/img/line-40.svg" alt="Line 44" />
              <img className="line-45-1" src="/img/line-40.svg" alt="Line 45" />
              <div className="group-172">
                <div className="group-171">
                  <div className="group-170">
                    <div className="rectangle-55-6"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 27" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number7}</div>
                  </div>
                  <Group169 />
                </div>
                <div className="january opensans-semi-bold-vulcan-16px">{january}</div>
              </div>
              <div className="group-173">
                <div className="group-171-1">
                  <div className="group-170-1">
                    <div className="rectangle-55-7"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 27" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number8}</div>
                  </div>
                  <Group1692 />
                </div>
                <div className="february opensans-semi-bold-vulcan-16px">{february}</div>
              </div>
              <div className="group-174">
                <div className="group-171-2">
                  <div className="group-170-2">
                    <div className="rectangle-55-8"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 27" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number9}</div>
                  </div>
                  <div className="group-169">
                    <div className="rectangle-56-6"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 46" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number10}</div>
                  </div>
                </div>
                <div className="place-7 opensans-semi-bold-vulcan-16px">{place1}</div>
              </div>
              <div className="group-175">
                <div className="group-171-3">
                  <Group170 />
                  <Group1693 number={group16931Props.number} />
                </div>
                <div className="name-2 opensans-semi-bold-vulcan-16px">{name1}</div>
              </div>
              <div className="group-176">
                <div className="group-171-4">
                  <Group170 />
                  <Group1692 className={group1692Props.className} />
                </div>
                <div className="name-3 opensans-semi-bold-vulcan-16px">{name2}</div>
              </div>
              <div className="group-177">
                <div className="group-171-5">
                  <Group1702 />
                  <div className="group-169-1">
                    <div className="rectangle-56-7"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 46" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number11}</div>
                  </div>
                </div>
                <div className="name-4 opensans-semi-bold-vulcan-16px">{name3}</div>
              </div>
              <div className="group-178">
                <div className="group-171-6">
                  <Group1702 />
                  <div className="group-169-2">
                    <div className="rectangle-56-8"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 46" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number12}</div>
                  </div>
                </div>
                <div className="july opensans-semi-bold-vulcan-16px">{july}</div>
              </div>
              <div className="group-179">
                <div className="group-171-7">
                  <div className="group-170-3">
                    <div className="rectangle-55-9"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 27" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number13}</div>
                  </div>
                  <Group169 className={group169Props.className} />
                </div>
                <div className="name-5 opensans-semi-bold-vulcan-16px">{name4}</div>
              </div>
              <div className="group-180">
                <div className="group-171-8">
                  <Group1693 number={group16932Props.number} className={group16932Props.className} />
                  <div className="group-169-3">
                    <div className="rectangle-56-9"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 46" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number14}</div>
                  </div>
                </div>
                <div className="september opensans-semi-bold-vulcan-16px">{september}</div>
              </div>
              <div className="group-181">
                <div className="group-171-9">
                  <div className="group-170-4">
                    <div className="rectangle-55-10"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 27" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number15}</div>
                  </div>
                  <div className="group-169-4">
                    <div className="rectangle-56-10"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 46" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number16}</div>
                  </div>
                </div>
                <div className="october opensans-semi-bold-vulcan-16px">{october}</div>
              </div>
              <div className="group-182">
                <div className="group-171-10">
                  <div className="group-170-5">
                    <div className="rectangle-55-11"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 27" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number17}</div>
                  </div>
                  <div className="group-169-5">
                    <div className="rectangle-56-11"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 46" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number18}</div>
                  </div>
                </div>
                <div className="november opensans-semi-bold-vulcan-16px">{november}</div>
              </div>
              <div className="group-183">
                <div className="group-171-11">
                  <div className="group-170-6">
                    <div className="rectangle-55-12"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 27" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number19}</div>
                  </div>
                  <div className="group-169-6">
                    <div className="rectangle-56-12"></div>
                    <img className="line-46" src="/img/line-27.svg" alt="Line 46" />
                    <div className="number-21 opensans-semi-bold-vulcan-12px">{number20}</div>
                  </div>
                </div>
                <div className="december opensans-semi-bold-vulcan-16px">{december}</div>
              </div>
            </div>
          </div>
          <p className="based-on-your-sales opensans-light-vulcan-20px">
            Based on your sales data and historical data of NYC coffee sales, In NYC coffee sales tend to fluctuate
            throughout the year due to seasonal changes. During the colder months, people tend to drink more hot coffee,
            while during the summer months, iced coffee sales increase. Next month is May and thus, you need to order
            more supplies for iced coffee.
            <br />
            <br />
            Boost on promotions during next months: During the next month, you should offer promotions or discounts to
            encourage customers to visit your shop as there will be a lot of travel junkies enjoying NYC in summer.{" "}
            <br />
            <br />
            Optimize your menu: Review your menu to ensure that you are offering the most popular and profitable items.
            Remove items that do not sell well like based on your past 3 years data you should remove turkish tea for
            the months of May, June and July and consider adding new items based on customer preferences like Cold
            slushied coffee. <br />
            <br />
            Implement a loyalty program: Based on your sales and customer data you have a good base of customer who
            loves your hot coffee and thus retain those customers. Offer rewards&nbsp;&nbsp;for their purchases, such as
            offering a free drink after a certain number of purchases or providing discounts for frequent visitors.
            <br />
            Monitor inventory levels and adjust: Based on NYC areas sales data and trends and your historical sales data
            it will be better to reduce ordering of Arabica beans as they will be overstocked and their demand is lesser
            in the next month and increase your order for napkins, cups and milk to increase your profitability.
          </p>
          <div className="revenuein-thousands-usd opensans-semi-bold-vulcan-24px">{revenueInThousandsUsd}</div>
          <div className="group-168">
            <div className="milk-3 opensans-semi-bold-cobalt-24px">{milk}</div>
            <img className="group-137-7" src={group1372} alt="Group 137" />
          </div>
          <div className="sales-prediction opensans-semi-bold-vulcan-24px">{salesPrediction}</div>
          <img className="vector-10-1" src="/img/vector-10.svg" alt="Vector 10" />
          <div className="ellipse-18-2"></div>
          <div className="ellipse-19-6"></div>
          <div className="ellipse-20-2"></div>
          <div className="ellipse-21-2"></div>
          <div className="ellipse-22"></div>
          <div className="ellipse-23"></div>
          <div className="ellipse-24"></div>
          <div className="ellipse-25-3"></div>
          <div className="ellipse-26"></div>
          <div className="ellipse-27"></div>
        </div>
        <div className="group-184-1">
          <Link to="/home-page" className="align-self-flex-start">
            <div className="group-28-4">
              <img className="icon-home-4" src={iconHome} alt="icon-home" />
              <div className="place-8 opensans-semi-bold-cobalt-16px">{place2}</div>
            </div>
          </Link>
          <Link to="/inventory-management-page">
            <div className="group-31-5">
              <img className="group-3-4" src={group30} alt="Group 30" />
              <div className="inventory-management-5 opensans-semi-bold-cobalt-16px">{inventoryManagement}</div>
            </div>
          </Link>
          <div className="flex-row-9">
            <div className="rectangle-6-7"></div>
            <div className="overlap-group1-5">
              <div className="group-32-4">
                <img className="group-3-4" src={group33} alt="Group 33" />
                <div className="sales-management-4 opensans-bold-athens-gray-16px">{salesManagement}</div>
              </div>
              <img className="vector-13" src="/img/vector.svg" alt="Vector" />
            </div>
          </div>
          <Link to="/fraud-and-security-detection-page">
            <div className="group-51-4">
              <img className="group-39-4" src={group39} alt="Group 39" />
              <div className="fraud-and-security-detection-4 opensans-semi-bold-cobalt-15px">
                {fraudAndSecurityDetection}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SalesAdvanceAnalyticsPage;
