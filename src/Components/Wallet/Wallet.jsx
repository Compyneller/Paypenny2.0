import React from "react";
import "./Wallet.scss";

const Wallet = () => {
  return (
    <div className="WalletMainContainer">
      <div className="container">
        <h1>Benefits Of Investing With Earn Wallet</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img src="https://img.icons8.com/ios/2x/tags--v2.gif" alt="" />
                <h5>Highest Returns</h5>
                <p>
                  We give you the highest returns on your investment worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/wallet-app--v2.gif"
                  alt=""
                />
                <h5>Multi-Holdings</h5>
                <p>
                  Just click on “add” in Earn Wallet & create holdings as many
                  as you want in one go easily!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/purse-front-view--v2.gif"
                  alt=""
                />
                <h5>Split large amount</h5>
                <p>
                  You can split your lump-sum amount and invest them for
                  different time periods according to your financial goals!
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/facebook-like--v4.gif"
                  alt=""
                />
                <h5>Best Interest Rates</h5>
                <p>
                  We offer the top-interest rate in the market which means the
                  interest rates are like never before!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/ok-hand--v2.gif"
                  alt=""
                />
                <h5>Simple & Convenient</h5>
                <p>
                  Get started in minutes with our simple & easy sign-up process
                  to begin your journey with Paypenny.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/wired/2x/link--v2.gif"
                  alt=""
                />
                <h5>100% Satisfaction</h5>
                <p>
                  Invest, sit back & relax! You will get your full amount with
                  guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
