import React from "react";
import { Link } from "react-router-dom";
import "./SignInPage.css";

function SignInPage(props) {
  const {
    group90,
    optimizeAi,
    title,
    secureLoginSeamle,
    enterYourEmail,
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
    signIn,
    or,
    spanText10,
    spanText11,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-in-page screen">
        <div className="overlap-group3">
          <img className="group-90-1" src={group90} alt="Group 90" />
          <div className="optimize-ai-1 opensans-semi-bold-athens-gray-28px">{optimizeAi}</div>
        </div>
        <div className="flex-col">
          <h1 className="title-1 opensans-semi-bold-vulcan-36px">{title}</h1>
          <p className="secure-login-seamle opensans-light-vulcan-20px">{secureLoginSeamle}</p>
          <div className="overlap-group1">
            <img className="vector-1" src="/img/vector.svg" alt="Vector" />
            <div className="enter-your-email opensans-normal-vulcan-16px">{enterYourEmail}</div>
          </div>
          <div className="overlap-group2">
            <img className="vector-2" src="/img/vector-1.svg" alt="Vector" />
            <div className="create-a-password opensans-normal-vulcan-16px">{createAPassword}</div>
          </div>
          <div className="group-377">
            <img className="vector-3" src="/img/vector-2.svg" alt="Vector" />
            <p className="i-agree-to-terms-c opensans-light-vulcan-16px">
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
            <div className="group-106">
              <div className="overlap-group">
                <div className="sign-in opensans-normal-athens-gray-16px">{signIn}</div>
              </div>
            </div>
          </Link>
          <div className="or opensans-normal-shark-16px">{or}</div>
          <Link to="/register-page" className="align-self-flex-center">
            <p className="dont-you-have-an-account-sign-up opensans-normal-white-20px">
              <span className="opensans-normal-black-20px">{spanText10}</span>
              <span className="span1 opensans-semi-bold-cobalt-20px">{spanText11}</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
