import React from "react";
import mobile from "../../Assets/4.png";
import "./Section2.scss";

const Section2 = () => {
  return (
    <div className="section2MainContainer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <h1>
              With Paypenny You Can Transfer INR(D) from Canada to 125+ banks
              across India
            </h1>
            <br />

            <h5>
              Paypenny gives you nationwide coverage of India. Transfer INR(D)
              easily to bank accounts at ICICI, SBI, Citi Bank, Axis Bank and
              many more!
            </h5>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
            >
              Download Paypenny App
            </a>
          </div>
          <div className="col-12 col-lg-6">
            <div className="w-100 d-flex">
              <img className="mx-auto" src={mobile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
