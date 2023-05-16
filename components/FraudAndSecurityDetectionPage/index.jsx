import React from "react";
import { Link } from "react-router-dom";
import Group14 from "../Group14";
import Group20 from "../Group20";
import Group19 from "../Group19";
import Group18 from "../Group18";
import "./FraudAndSecurityDetectionPage.css";

function FraudAndSecurityDetectionPage(props) {
  const {
    group90,
    optimizeAi,
    iconHome,
    place,
    group30,
    inventoryManagement,
    group33,
    salesManagement,
    group39,
    fraudAndSecurityDetection,
    group386,
    title,
    ensuresSecureAcces,
    disputeManagement,
    providesAStreamlin,
    group387,
    transactionMonitoring,
    enhancesSecurityAn,
    group398,
    privacyPolicy,
    clearlyOutlinesThe,
    realTimeAlertSystem,
    instantlyNotifiesU,
    termsOfService,
    theLegalAgreement,
    fraudulentScore,
    calculatesAndDispl,
    customerSupport,
    offersAssistanceG,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="fraud-and-security-detection-page screen">
        <div className="group-75">
          <Link to="/home-page">
            <div className="group-92">
              <img className="group-90" src={group90} alt="Group 90" />
              <div className="optimize-ai opensans-semi-bold-vulcan-14-6px">{optimizeAi}</div>
            </div>
          </Link>
          <Group14 />
          <Group20 />
          <Group19 />
          <Group18 />
        </div>
        <div className="rectangle-6"></div>
        <div className="rectangle-6-1"></div>
        <Link to="/home-page">
          <div className="group-28">
            <img className="icon-home" src={iconHome} alt="icon-home" />
            <div className="place opensans-semi-bold-cobalt-16px">{place}</div>
          </div>
        </Link>
        <Link to="/inventory-management-page">
          <div className="group-31">
            <img className="group-3" src={group30} alt="Group 30" />
            <div className="inventory-management opensans-semi-bold-cobalt-16px">{inventoryManagement}</div>
          </div>
        </Link>
        <Link to="/sales-management-page">
          <div className="group-32">
            <img className="group-3" src={group33} alt="Group 33" />
            <div className="sales-management opensans-semi-bold-cobalt-16px">{salesManagement}</div>
          </div>
        </Link>
        <div className="group-51">
          <img className="group-39" src={group39} alt="Group 39" />
          <div className="fraud-and-security-detection">{fraudAndSecurityDetection}</div>
        </div>
        <img className="vector" src="/img/vector-4.svg" alt="Vector" />
        <div className="group-container">
          <div className="group-4">
            <img className="group-3-1" src={group386} alt="Group 386" />
            <h1 className="title opensans-semi-bold-cobalt-24px">{title}</h1>
            <p className="ensures-secure-acces opensans-normal-vulcan-14px">{ensuresSecureAcces}</p>
          </div>
          <div className="group-411">
            <img className="image-7-traced" src="/img/image-7--traced-.svg" alt="image 7 (Traced)" />
            <div className="dispute-management opensans-semi-bold-cobalt-24px">{disputeManagement}</div>
            <p className="provides-a-streamlin opensans-normal-vulcan-14px">{providesAStreamlin}</p>
          </div>
        </div>
        <div className="group-container-1">
          <div className="group-409">
            <img className="group-3-1" src={group387} alt="Group 387" />
            <div className="transaction-monitoring opensans-semi-bold-cobalt-24px">{transactionMonitoring}</div>
            <p className="enhances-security-an opensans-normal-vulcan-14px">{enhancesSecurityAn}</p>
          </div>
          <div className="group-413">
            <img className="group-3-1" src={group398} alt="Group 398" />
            <div className="privacy-policy opensans-semi-bold-cobalt-24px">{privacyPolicy}</div>
            <p className="clearly-outlines-the opensans-normal-vulcan-14px">{clearlyOutlinesThe}</p>
          </div>
        </div>
        <div className="group-container-2">
          <div className="group-407">
            <img className="icon-search" src="/img/image-5--traced-.svg" alt="icon-search" />
            <div className="real-time-alert-system opensans-semi-bold-cobalt-24px">{realTimeAlertSystem}</div>
            <p className="instantly-notifies-u opensans-normal-vulcan-14px">{instantlyNotifiesU}</p>
          </div>
          <div className="group-4">
            <img className="image-8-traced" src="/img/image-8--traced-.svg" alt="image 8 (Traced)" />
            <div className="terms-of-service opensans-semi-bold-cobalt-24px">{termsOfService}</div>
            <p className="the-legal-agreement opensans-normal-vulcan-14px">{theLegalAgreement}</p>
          </div>
        </div>
        <div className="group-container-3">
          <div className="group-4">
            <img className="image-6-traced" src="/img/image-6--traced-.svg" alt="image 6 (Traced)" />
            <div className="fraudulent-score opensans-semi-bold-cobalt-24px">{fraudulentScore}</div>
            <p className="calculates-and-displ opensans-normal-vulcan-14px">{calculatesAndDispl}</p>
          </div>
          <div className="group-417">
            <img className="icon-refresh" src="/img/image-9--traced-.svg" alt="icon-refresh" />
            <div className="customer-support opensans-semi-bold-cobalt-24px">{customerSupport}</div>
            <p className="offers-assistance-g opensans-normal-vulcan-14px">{offersAssistanceG}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FraudAndSecurityDetectionPage;
