import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="py-5 text-light" style={{ background: "black" }}>
      <div className="container">
        <div className="w-100 mb-4   d-flex justify-content-between align-items-center">
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/tc"
            onClick={() => scrollToTop()}
          >
            Term & Conditions
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/privacypolicy"
            onClick={() => scrollToTop()}
          >
            Privacy & Policy
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/contactus"
            onClick={() => scrollToTop()}
          >
            Contact Us
          </Link>
        </div>
        <br />
        <br />
        <div className="row">
          <div className=" col-12 col-lg-10 d-flex">
            <p className="my-auto text-center">
              © paypenny all Rights Reserved. The Brand PayPenny belongs to
              Trackon Canada Private Limited registered in Alberta,Canada.
            </p>
          </div>
          <div className="col-12 col-lg-2 footerSocials">
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
              <img src="https://img.icons8.com/ios/2x/twitter--v2.gif" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
