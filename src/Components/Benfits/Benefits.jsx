import React from "react";
import "./Benefits.scss";

const Benefits = () => {
  return (
    <div className="BenefitsMainContainer">
      <div className="container">
        <h1 className="text-light mb-5">
          Benefits of sending INR(D) with Paypenny
        </h1>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-4 my-5"
            data-aos="zoom-in-right"
          >
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://img.icons8.com/ultraviolet/2x/library--v2.gif"
                alt=""
              />
              <h5>Govt Reg & Regulated</h5>
              <p>
                Our company is registered with FINTRAC which clearly mentions
                how healthy our paypenny ecosystem is.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-5" data-aos="zoom-out">
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://img.icons8.com/ios/2x/place-marker--v2.gif"
                alt=""
              />
              <h5>Anytime Anywhere</h5>
              <p>
                We are available for you every time that's the reason we have
                made our system powerful and anyone can access it anytime
                anywhere.
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 my-5"
            data-aos="zoom-in-left"
          >
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://img.icons8.com/ios/2x/expensive-2--v2.gif"
                alt=""
              />
              <h5>Better Rates</h5>
              <p>
                Sending INR(D) to your home is comparatively lower than the
                banks, get the best rates at ease!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-4 my-5"
            data-aos="zoom-in-right"
          >
            <div
              className="benefitsCards
            "
            >
              <img src="https://img.icons8.com/ios/2x/check--v2.gif" alt="" />
              <h5>Easy & Convenient</h5>
              <p>
                Get started in minutes with our simple signup process. Remit
                INR(D) worldwide on the go with our mobile app.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-5" data-aos="zoom-out">
            <div
              className="benefitsCards
            "
            >
              <img src="https://img.icons8.com/ios/2x/qr-code--v2.gif" alt="" />
              <h5>Track your transfer online</h5>
              <p>
                Don't lose sight of your INR(D). Track your transfer at every
                stage.
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 my-5"
            data-aos="zoom-in-left"
          >
            <div
              className="benefitsCards
            "
            >
              <img
                src="https://img.icons8.com/ios/2x/teamwork--v2.gif"
                alt=""
              />
              <h5>Round The Clock Support</h5>
              <p>
                Our amazing customer support team are on standby to help you
                when need them. Get an answer to your question, fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
