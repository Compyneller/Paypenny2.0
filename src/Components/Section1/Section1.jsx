import React from "react";
import "./Section1.scss";
import animation from "../../Assets/Mobile.gif";

const Section1 = () => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center  section1MainContainer ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 my-auto">
            <h1>Hundreds of thousands of NRIs trust Paypenny</h1>
            <p>
              Get the highest exchange rates guaranteed. Download Paypenny now
              and experience the difference.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
              target="_blank"
            >
              <i className="fa-brands fa-google-play " />
              <p>Download PayPenny App</p>
            </a>
            <a
              href="https://apps.apple.com/in/app/paypenny/id1545140323"
              target="_blank"
            >
              <i className="fa-brands fa-apple "></i>
              <p>Download PayPenny App</p>
            </a>
          </div>
          <div className="col-12 col-lg-6">
            <div>
              <img className="w-100" src={animation} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
