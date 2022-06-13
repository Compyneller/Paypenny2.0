import React from "react";
import "./SubFooter.scss";

const SubFooter = () => {
  return (
    <div className="subFooterMainContainer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="subFooterCard">
              <img
                src="https://img.icons8.com/external-phatplus-solid-phatplus/344/external-check-essential-phatplus-solid-phatplus.png"
                alt=""
              />
              <div className="subFooterContent">
                <h5>24/7 INR(D) Transfer</h5>
                <p>
                  Send INR(D) worldwide whenever you want to with our iOS &
                  Android mobile application. We are always open to you.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="subFooterCard">
              <img
                src="https://img.icons8.com/external-phatplus-solid-phatplus/344/external-check-essential-phatplus-solid-phatplus.png"
                alt=""
              />
              <div className="subFooterContent">
                <h5>Lowest possible risk level</h5>
                <p>
                  We have advanced technology which improves our data & insights
                  and puts our business at the lowest risk level.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="subFooterCard">
              <img
                src="https://img.icons8.com/external-phatplus-solid-phatplus/344/external-check-essential-phatplus-solid-phatplus.png"
                alt=""
              />
              <div className="subFooterContent">
                <h5>We handled over $100+ Million last year</h5>
                <p>
                  Our business’s main asset is currency. We have handled
                  currency worth over $100+ Million in the last year.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="subFooterCard">
              <img
                src="https://img.icons8.com/external-phatplus-solid-phatplus/344/external-check-essential-phatplus-solid-phatplus.png"
                alt=""
              />
              <div className="subFooterContent">
                <h5>1,25,000+ happy customers & counting</h5>
                <p>
                  We have gained the trust of 1,25,000+ people to manage their
                  currency and the numbers are increasing day by day.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <p className="text-light text-center">
          Registered & regulated by FINTRAC. We are approved by the Financial
          Transactions and Reports Analysis Center of Canada.
        </p>
        <h1
          className=" text-center"
          style={{ color: "goldenrod", fontSize: "55px" }}
        >
          Trusted by over 1,25,000+ users
        </h1>
      </div>
    </div>
  );
};

export default SubFooter;
