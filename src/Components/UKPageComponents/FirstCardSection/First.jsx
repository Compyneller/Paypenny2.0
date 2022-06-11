import React from "react";
import "./Wallet.scss";

const First = () => {
  return (
    <div className="WalletMainContainer">
      <div className="container">
        <h1>What makes us stand out in the market?</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/purse-front-view--v2.gif"
                  alt=""
                />
                <h5>Super Wallet</h5>
                <p>
                  Paypenny present’s Super wallet where you can add as low as £1
                  and as high as £50,000 as many times as you want in a single
                  day!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/ios/2x/bank-card-front-side--v2.gif"
                  alt=""
                />
                <h5>Transaction Fees</h5>
                <p>
                  Say Goodbye to the high transaction fee as Paypenny incurs
                  zero fees with no hidden charges or additional charges on your
                  transactions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="content">
                <img
                  src="https://img.icons8.com/pastel-glyph/2x/trust--v2.gif"
                  alt=""
                />
                <h5>Supports 100+ Indian Banks</h5>
                <p>
                  Get access to almost all the national & private Indian banks
                  and directly send INR(D) into your family member's bank
                  account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
