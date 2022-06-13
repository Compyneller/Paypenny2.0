import React from "react";
import animate from "../../Assets/Online transactions.gif";
import "./Why.scss";

const Why = () => {
  return (
    <div className="whyMainContainer text-center">
      <div className="container">
        <h1>Why Choose Us?</h1>
        <div className="row ">
          <div className="col-12 col-lg-6 whySideImage">
            <img src={animate} className="w-100" alt="" />
          </div>
          <div className="col-12 col-lg-6 whySideCard">
            <img
              src="https://img.icons8.com/pastel-glyph/2x/alarm-clock--v3.gif"
              alt=""
            />
            <h3>We're Fast</h3>
            <p>90% of our transactions are authorized in minutes.</p>
            <br />
            <br />
            <img
              src="https://img.icons8.com/wired/2x/approval--v2.gif"
              alt=""
            />
            <h3>We’re Safe</h3>
            <p className="w-75 ">
              Our industry-leading technology protects your INR(D) and
              guarantees it arrives safely every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
