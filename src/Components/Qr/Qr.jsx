import React from "react";
import "./Qr.scss";
import qr from "../../Assets/onlink_to_wjt5cq.svg";

const Qr = () => {
  return (
    <div className="qrMainContainer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="w-100 d-flex">
              <div className="w-75 mx-auto">
                <h5>Scan to download app</h5>
                <img src={qr} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <h5>Click to download app</h5>
            <div className="qrDownloadButton">
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/paypenny/id1545140323"
              >
                <i className="fa-brands fa-apple "></i>
                <p>Download PayPenny App</p>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
              >
                <i className="fa-brands fa-google-play " />
                <p>Download PayPenny App</p>
              </a>
            </div>
            <div className="qrSocialsButton">
              <a target="_blank" href="https://www.facebook.com/PayPennyCa/">
                <img
                  src="https://img.icons8.com/ios/2x/facebook--v2.gif"
                  alt=""
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/paypennyca/">
                <img
                  src="https://img.icons8.com/ios/2x/instagram-new--v3.gif"
                  alt=""
                />
              </a>
              <a target="_blank" href="https://twitter.com/payPENNY2">
                <img
                  src="https://img.icons8.com/ios/2x/twitter--v2.gif"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qr;
