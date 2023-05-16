import React from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage(props) {
  const {
    group90,
    optimizeAi,
    title,
    letsGetStartedWi,
    enterYourEmail,
    confirmYourEmail,
    createAPassword,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    signUp,
    or,
    spanText10,
    spanText11,
    spanText12,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="register-page screen">
        <div className="overlap-group4-1">
          <img className="group-90-6" src={group90} alt="Group 90" />
          <div className="optimize-ai-6 opensans-semi-bold-athens-gray-28px">{optimizeAi}</div>
        </div>
        <div className="flex-col-14">
          <h1 className="title-4 opensans-semi-bold-vulcan-36px">{title}</h1>
          <p className="lets-get-started-wi opensans-light-vulcan-20px">{letsGetStartedWi}</p>
          <div className="overlap-group3-2">
            <img className="vector-8" src="/img/vector-7.svg" alt="Vector" />
            <div className="enter-your-email-1 opensans-normal-vulcan-16px">{enterYourEmail}</div>
          </div>
          <div className="overlap-group1-3">
            <img className="vector-9" src="/img/vector-5.svg" alt="Vector" />
            <div className="confirm-your-email opensans-normal-vulcan-16px">{confirmYourEmail}</div>
          </div>
          <div className="overlap-group2-3">
            <img className="vector-10" src="/img/vector-6.svg" alt="Vector" />
            <div className="create-a-password-1 opensans-normal-vulcan-16px">{createAPassword}</div>
          </div>
          <div className="group-377-1">
            <img className="vector-11" src="/img/vector-2.svg" alt="Vector" />
            <p className="i-agree-to-terms-c-1 opensans-light-vulcan-16px">
              <span className="opensans-light-vulcan-16px">{spanText1}</span>
              <span className="opensans-normal-vulcan-16px">{spanText2}</span>
              <span className="opensans-semi-bold-vulcan-16px">{spanText3}</span>
              <span className="opensans-normal-vulcan-16px">{spanText4}</span>
              <span className="opensans-light-vulcan-16px">{spanText5}</span>
              <span className="opensans-normal-vulcan-16px">{spanText6}</span>
              <span className="opensans-semi-bold-vulcan-16px">{spanText7}</span>
              <span className="opensans-normal-vulcan-16px">{spanText8}</span>
              <span className="opensans-light-vulcan-16px">{spanText9}</span>
            </p>
          </div>
          <Link to="/home-page">
            <div className="group-106-1">
              <div className="overlap-group-1">
                <div className="sign-up opensans-normal-athens-gray-16px">{signUp}</div>
              </div>
            </div>
          </Link>
          <div className="or-1 opensans-normal-shark-16px">{or}</div>
          <Link to="/sign-in-page" className="align-self-flex-center">
            <p className="already-have-a-optim opensans-normal-white-20px">
              <span className="opensans-normal-black-20px">{spanText10}</span>
              <span className="span1-1">{spanText11}</span>
              <span className="span2 opensans-semi-bold-cobalt-20px">{spanText12}</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
